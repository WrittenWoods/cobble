import { SearchSnippet } from "./interfaces";

// Function that accepts snippet titles as an array of strings
// as well as a one-dimensional array of snippets to search
// and returns the corresponding content as a result if present.

export const getOneDContent = function returnContentFromOneDimensionalArray
(sheet: SearchSnippet[], titlePath: string[]): string | string[] {

  let content: string | string[] = []
  let match = false

  for (let i = 0; i < sheet.length; i++) {
    for (let j = 0; j < titlePath.length; j++) {
      match = sheet[i].titlePath.includes(titlePath[j]) ? true : false
    }
    if (match && titlePath.length === sheet[i].titlePath.length) {
      content = sheet[i].content
    }
  }

  return content

}
