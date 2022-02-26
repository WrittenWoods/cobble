import { Snippet, SearchSnippet } from "./interfaces";
import { endOfTitlePath } from "./endOfTitlePath";

export const nestSnippet = function addSearchSnippetToNestedSheetArray
  (snippet: SearchSnippet, arr: Snippet[]) {

  let newSnippet = true

  // Changes content of existing snippet if present in array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === snippet.titlePath[0]) {
      newSnippet = false
      if (snippet.titlePath.length === 1) {
        arr[i].content = snippet.content
      } else {
        arr[i].content = nestSnippet(
          { titlePath: snippet.titlePath.slice(1), content: snippet.content }, arr[i].content
        )
      }
    }
  }

  // Adds new snippet if not present in array

  if (newSnippet) {
    if (snippet.titlePath.length === 1) {
      arr.push({ title: snippet.titlePath[0], content: snippet.content })
    } else {
      arr.push( { title: snippet.titlePath[0], content: nestSnippet(
        { titlePath: snippet.titlePath.slice(1), content: snippet.content }, []
      ) })
    }
  }

  // returns array with changed or added value.

  return arr
}
