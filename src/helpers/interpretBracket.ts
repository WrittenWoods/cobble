import { diceRoller } from "./diceRoller";
import { evaluate } from 'mathjs';
import { getOneDContent } from "./getOneDContent";
import { SearchSnippet } from "./interfaces";

export const interpretBracket = function returnBracketedStringWithNewInterpolatedValues
(str: string, sheet: SearchSnippet[]): string {

  let result = str

  // Find and replace title paths with corresponding content

  let titlePathString = result.replace(/([\d]+d[\d]+)/, "") //replaces dice rolls to prevent false positives
  let titlePathsArray = [...titlePathString.matchAll(/([A-Za-z0-9-.]+)/g)].map(a => a[0])
  let contentArray = titlePathsArray.map( x => getOneDContent(sheet, x).length ? getOneDContent(sheet, x) : x )
  for (let i = 0; i < contentArray.length; i++) {
    result = result.replace(titlePathsArray[i], contentArray[i])
  }

  // Find and replace dice roll results

  let rollArray = [...result.matchAll(/([\d]+d[\d]+)/g)].map(a => a[0])
  let rolledArray = rollArray.map(x => diceRoller(x))
  for (let i = 0; i < rollArray.length; i++) {
    result = result.replace(rollArray[i], rolledArray[i])
  }

  // Find and replace mathematical operations with calculated results

  let mathArray = [...result.matchAll(/(\d|\+|\-|\*|\/|\(|\)| )+/g)]
                  .map(a => a[0])
  let calculatedArray = mathArray.map(x => /[\S]+/.test(x) ? evaluate(x) : x)
  console.log(calculatedArray)
  for (let i = 0; i < mathArray.length; i++) {
    result = result.replace(mathArray[i], calculatedArray[i].toString())
  }

  return result
}
