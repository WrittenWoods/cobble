import { SearchBlock } from "./interfaces";
import { getOneDContent } from "./getOneDContent";
import { diceRoller } from "./diceRoller";
import { evaluate } from 'mathjs';

// Function that finds bracketed text in a string
// and parses it for block content, dice rolls, mathematical operations

export const parseContent = (
  content: string | string[],
  sheet: SearchBlock[],
  isDiceButtonClick: boolean = false
): { contentType: string; parsedContent: string | string[]; } => {

  let result: { contentType: string, result: string | string[] };

  // Function that parses the contents of bracketed text in a block

  function parseBracket (str: string): { isButton: boolean, result: string } {

    let isButton = false
    let result = str.replaceAll(/\[|\]/g, "")

    // Find and replace title paths with corresponding content

    let titlePathString = result.replace(/([\d]+d[\d]+)/, "") //replaces dice rolls to prevent false positives
    let titlePathsArray = [...titlePathString.matchAll(/([A-Za-z0-9-.]+)/g)].map(a => a[0])
    let contentArray = titlePathsArray.map( x => getOneDContent(x, sheet).length ? getOneDContent(x, sheet) : x )
    for (let i = 0; i < contentArray.length; i++) {
      result = result.replace(titlePathsArray[i], contentArray[i])
    }
    let toRecurse = [...result.matchAll(/\[(.)*?\]/g)].map(a => a[0])
    if (toRecurse.length) {
      for (let i = 0; i < toRecurse.length; i++) {
        result = result.replace(toRecurse[i], parseBracket(toRecurse[i]).result)
      }
    }

    // Find and replace dice roll results

    let rollArray = [...result.matchAll(/([\d]+d[\d]+)/g)].map(a => a[0])
    if (rollArray.length) { isButton = !isDiceButtonClick }
    if (isButton) {
      return { isButton: isButton, result: `[${result}]` }
    }
    let rolledArray = rollArray.map(x => diceRoller(x))
    for (let i = 0; i < rollArray.length; i++) {
      result = result.replace(rollArray[i], rolledArray[i])
    }

    // Find and replace mathematical operations with calculated results

    let mathArray = [...result.matchAll(/(\d|\+|\-|\*|\/|\(|\)|\.| )+/g)]
                    .map(a => a[0])
    let calculatedArray = mathArray.map(x => /[\S]+/.test(x) ? evaluate(x) : x)
    for (let i = 0; i < mathArray.length; i++) {
      result = result.replace(mathArray[i], calculatedArray[i].toString())
    }

    return { isButton: isButton, result: result }
  }

  // Function that finds and calls the parseBracket function on each set
  // of bracketed text in a string then returns interpolated string

  function parseBracketsInString (str: string) {
    let isButton = false
    let newStr = str
    let bracketsArray = [...str.matchAll(/\[(.)*?\]/g)].map(a => a[0])
    let interpretedArray = bracketsArray.map(x => parseBracket(x))
    for (let i = 0; i < interpretedArray.length; i++) {
      if (interpretedArray[i].isButton) { isButton = true }
      newStr = newStr.replace(bracketsArray[i], interpretedArray[i].result)
    }
    return { isButton: isButton, result: newStr}
  }

  // Returns result depending on whether content is single string or array of strings

  result = Array.isArray(content) ?
    { contentType: "list", parsedContent: content.map(x => parseBracketsInString(x).result) }
    :
    { contentType: parseBracketsInString(content).isButton ? "button" : "text" ,
      parsedContent: parseBracketsInString(content).result }

  return result

}
