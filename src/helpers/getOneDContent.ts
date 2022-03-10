import { SearchBlock } from "./interfaces";

// Function that accepts block titles as a string of the form "mainpage.abilityscores.strength" etc.
// and returns the corresponding content as a result if present.

export const getOneDContent = (titlePath: string, sheet: SearchBlock[]): string | string[] => {

  let content: string | string[] = []

  function matchTitlePath (str: string, arr: string[]): boolean {
    let newStr = arr.map(x => x.toLowerCase().replace(/[\s]+|\-/, "")).join('.')
    return newStr === str.toLowerCase()
  }

  for (let i = 0; i < sheet.length; i++) {
    if (matchTitlePath(titlePath, sheet[i].titlePath)) { content = sheet[i].content }
  }

  return content

}
