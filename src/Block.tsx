import React, { useState } from 'react';
import { SearchBlock } from "./helpers/interfaces";
import { diceRoller } from "./helpers/diceRoller";
import { evaluate } from 'mathjs';

// This component represents individual blocks in a character sheet
// including blocks that may contain other blocks

export default function Block (props) {

  // Function that accepts block titles as a string of the form "mainpage.abilityscores.strength" etc.
  // and returns the corresponding content as a result if present.

  const getOneDContent = (titlePath: string): string | string[] => {

    let content: string | string[] = []
    let match = false

    function matchTitlePath (str: string, arr: string[]): boolean {

      let newStr = arr.map(x => x.toLowerCase().replace(/[\s]+|\-/, "")).join('.')
      return newStr === str.toLowerCase()

    }

    for (let i = 0; i < props.sheetData.length; i++) {
      if (matchTitlePath(titlePath, props.sheetData[i].titlePath)) { content = props.sheetData[i].content }
    }

    return content

  }

  // Function that finds bracketed text in a string
  // and parses it for block info, dice rolls, mathematical operations

  const parseContent = (content: string | string[]) => {

    let result: string | string[];

    // Parses the contents of bracketed text in a block

    function parseBracket (str: string): string {

      let result = str.replaceAll(/\[|\]/g, "")

      // Find and replace title paths with corresponding content

      let titlePathString = result.replace(/([\d]+d[\d]+)/, "") //replaces dice rolls to prevent false positives
      let titlePathsArray = [...titlePathString.matchAll(/([A-Za-z0-9-.]+)/g)].map(a => a[0])
      let contentArray = titlePathsArray.map( x => getOneDContent(x).length ? getOneDContent(x) : x )
      for (let i = 0; i < contentArray.length; i++) {
        result = result.replace(titlePathsArray[i], contentArray[i])
      }
      let toRecurse = [...result.matchAll(/\[(.)*?\]/g)].map(a => a[0])
      if (toRecurse.length) {
        for (let i = 0; i < toRecurse.length; i++) {
          result = result.replace(toRecurse[i], parseBracket(toRecurse[i]))
        }
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
      for (let i = 0; i < mathArray.length; i++) {
        result = result.replace(mathArray[i], calculatedArray[i].toString())
      }

      return result
    }

    // Finds and calls the parseBracket function on each set of bracketed text in a string
    // Returns interpolated string

    function parseBracketsInString (str: string) {
      let newStr = str
      let bracketsArray = [...str.matchAll(/\[(.)*?\]/g)].map(a => a[0])
      let interpretedArray = bracketsArray.map(x => parseBracket(x))
      for (let i = 0; i < interpretedArray.length; i++) {
        newStr = newStr.replace(bracketsArray[i], interpretedArray[i])
      }
      return newStr
    }

    result = Array.isArray(content) ?
      content.map(x => parseBracketsInString(x))
      : parseBracketsInString(content)

    return result

  }

  return (
    <li>{props.titlePath.join(".") + " : " + parseContent(props.content)}</li>
  )
}
