import { Snippet, SearchSnippet } from "./interfaces";
import { endOfTitlePath } from "./endOfTitlePath";

export const nestSnippet = function addSearchSnippetToNestedSheetArray
  (newSnippet: SearchSnippet, arr: Snippet[]) {

  let newArr = arr

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].title === newSnippet.titlePath[0]) {

    }
  }

  return newArr
}
