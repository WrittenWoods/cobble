import { interpretBracket } from "./interpretBracket";
import { SearchSnippet } from "./interfaces";

export const interpretStringInput = function findAndInterpretBracketsInString
(content: string, sheet: SearchSnippet[]) {

  let result: string | string[];

  function interpretBracketsInString (str: string, sheet: SearchSnippet[]) {
    let newStr = str
    let bracketsArray = [...str.matchAll(/\[(.)*?\]/g)].map(a => a[0])
    let interpretedArray = bracketsArray.map(x => interpretBracket(x, sheet))
    for (let i = 0; i < interpretedArray.length; i++) {
      newStr = newStr.replace(bracketsArray[i], interpretedArray[i])
    }
    return newStr.replaceAll(/\[|\]/g, "")
  }

  return interpretBracketsInString(content, sheet)

}
