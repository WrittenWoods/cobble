import { SearchBlock } from "./interfaces";

// Accepts: Block titles as a string of the form "mainpage.abilityscores.strength" etc.
// Returns: The corresponding content as a result if present.

export const getOneDContent = (titlePath: string, sheet: SearchBlock[]): string => {

  let content: string = ""

  function matchTitlePath (str: string, arr: string[]): boolean {
    let newStr = arr.map(x => x.toLowerCase().replaceAll(/[\s]+|\-/g, "")).join('.')
    return newStr === str.toLowerCase()
  }

  for (let i = 0; i < sheet.length; i++) {
    if (matchTitlePath(titlePath, sheet[i].titlePath)) { content = sheet[i].content }
  }

  return content

}
