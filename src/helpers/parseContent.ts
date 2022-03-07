import { parseBracket } from "./parseBracket";
import { SearchBlock } from "./interfaces";

export const parseContent = function findAndparseBracketsInString
(content: string | string[], sheet: SearchBlock[]) {

  let result: string | string[];

  function parseBracketsInString (str: string, sheet: SearchBlock[]) {
    let newStr = str
    let bracketsArray = [...str.matchAll(/\[(.)*?\]/g)].map(a => a[0])
    let interpretedArray = bracketsArray.map(x => parseBracket(x, sheet))
    for (let i = 0; i < interpretedArray.length; i++) {
      newStr = newStr.replace(bracketsArray[i], interpretedArray[i])
    }
    return newStr
  }

  result = Array.isArray(content) ?
    content.map(x => parseBracketsInString(x, sheet))
    : parseBracketsInString(content, sheet)

  return result

}
