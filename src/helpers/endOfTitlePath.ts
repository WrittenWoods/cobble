import { Snippet, SearchSnippet } from "./interfaces";

export const endOfTitlePath = function checkContentForStringOrStringsArray
  (snippet: Snippet | SearchSnippet): boolean {

  if (Array.isArray(snippet.content)) {
    for (let i = 0; i < snippet.content.length; i++) {
      if (typeof snippet.content[i] !== 'string') { return false }
    }
  }

  return true

}
