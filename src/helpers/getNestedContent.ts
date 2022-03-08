
// Function that accepts block titles as an array of strings
// as well as an array of potentially nested blocks to search
// and returns the corresponding content as a result if present.

export const getNestedContent = function returnContentFromNestedArray
(keys: string[], toSearch: any[]): any[] | string | undefined {

  let keyPath = keys

  for (let i = 0; i < toSearch.length; i++) {
    if (toSearch[i].title === keyPath[0]) {
      if (keyPath.length === 1) {
        return toSearch[i].content
      } else {
        return getNestedContent(keyPath.slice(1), toSearch[i].content)
      }
    }
  }
  
}
