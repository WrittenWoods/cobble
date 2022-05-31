import React, { useState, useEffect } from 'react';
import { arrayEquals } from "./helpers/arrayEquals";
import { SearchBlock } from "./helpers/interfaces";
import { getOneDContent } from "./helpers/getOneDContent";
import { diceRoller } from "./helpers/diceRoller";
import { ContentProps } from "./helpers/interfaces";
import { evaluate } from 'mathjs';

function ParsedContent ({ sheetState, contentAtPath }: ContentProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // Function that finds bracketed text in a string
  // and parses it for block content, dice rolls, mathematical operations

  function parseContent (content: string, sheet: SearchBlock[]) {

    function tryEval(string: string) {
      try {
        return evaluate(string)
      } catch {
        return string
      }
    }

    // Executes the math in a string and returns interpolated string

    function interpolateMath(str: string) {
      let result = str
      let mathArray = [...result.matchAll(/(\d|\+|\-|\*|\/|\(|\)|\.| )+/g)]
                      .map(a => a[0].trim())
      let calculatedArray = mathArray.map(x => /[\S]+/.test(x) ? tryEval(x) : x)
      for (let i = 0; i < mathArray.length; i++) {
        result = result.replace(mathArray[i], calculatedArray[i].toString())
      }
      return result
    }

    // Executes a complex die roll that might involve modifiers, different kinds of die, etc.

    function complexDieRoller(str: string) {
      let result = str
      let rollArray = [...result.matchAll(/([\d]+d[\d]+)/g)].map(a => a[0])
      let rolledArray = rollArray.map(x => diceRoller(x).toString())
      for (let i = 0; i < rollArray.length; i++) {
        result = result.replace(rollArray[i], rolledArray[i])
      }
      return interpolateMath(result)
    }

    // Function that parses the contents of bracketed text in a block

    function parseBracket (str: string): { containsRoll: boolean, result: string } {

      let result = str.replaceAll(/\[|\]/g, "")

      // Find and replace title paths with corresponding content

      let titlePathString = result.replace(/([\d]+d[\d]+)/, "") //replaces dice rolls to prevent false positives
      let titlePathsArray = [...titlePathString.matchAll(/([A-Za-z0-9-.]+)/g)].map(a => a[0])
      let contentArray = titlePathsArray.map( x => getOneDContent(x, sheet).length ? getOneDContent(x, sheet) : x )
      for (let i = 0; i < contentArray.length; i++) {
        result = result.replace(titlePathsArray[i], contentArray[i])
      }
      let toRecurse = [...result.matchAll(/\[(.)*?\]/g)].map(a => a[0])
      while (toRecurse.length) {
        for (let i = 0; i < toRecurse.length; i++) {
          result = result.replace(toRecurse[i], parseBracket(toRecurse[i]).result)
        }
        toRecurse = [...result.matchAll(/\[(.)*?\]/g)].map(a => a[0])
      }

      // Identify if bracketed string contains a dice roll
      let containsRoll = /([\d]+d[\d]+)/.test(result)

      // Find and replace mathematical operations with calculated results

      if (!containsRoll) {
        result = interpolateMath(result)
      }

      return { containsRoll: containsRoll, result: result }

    }

    // Function that finds and calls the parseBracket function on each set
    // of bracketed text in a string then returns interpolated string

    function parseBracketsInString (str: string) {
      let arr = []
      let newStr = ""

      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "[" && newStr.length !== 0) {
          arr.push(newStr)
          newStr = ""
        }

        newStr += str.charAt(i)

      	if (newStr.charAt(0) === "[" && str.charAt(i) === "]") {
          arr.push(newStr)
          newStr = ""
        }
      }

      if (newStr.length) { arr.push(newStr) }

      return (
        arr.map( (x, index) => {
          if (/\[(.)*?\]/.test(x)) {
            let toRender = parseBracket(x)
            if (toRender.containsRoll) {
              return (
                <button
                  onClick={
                    () => setDisplayed([...displayed, {
                      panelType: "content",
                      blockString: `${toRender.result} = ${complexDieRoller(toRender.result)}`
                    }])
                  }
                  key={index}
                >
                  {toRender.result}
                </button>
              )
            } else if (!toRender.containsRoll) {
              return <span key={index} >{toRender.result}</span>
            }
          } else {
            return <span key={index} >{x}</span>
          }
        })
      )
    }

    // Returns result depending on whether content is single string or array of strings

    return parseBracketsInString(content)

  }

  return (
    <>
      {parseContent(contentAtPath, sheet)}
    </>
  )

}

export default ParsedContent;
