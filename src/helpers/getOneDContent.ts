import { SearchBlock } from "./interfaces";
import { matchTitlePath } from "./matchTitlePath";

// Function that accepts snippet titles as an array of strings
// as well as a one-dimensional array of snippets to search
// and returns the corresponding content as a result if present.

export const getOneDContent = function returnContentFromOneDimensionalArray
(sheet: SearchBlock[], titlePath: string): string | string[] {

  let content: string | string[] = []
  let match = false

  for (let i = 0; i < sheet.length; i++) {
    if (matchTitlePath(titlePath, sheet[i].titlePath)) { content = sheet[i].content }
  }

  return content

}
