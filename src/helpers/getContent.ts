export const getContent = function returnContentFromKeysArray
(keys: string[], toSearch: any[]): any[] | string | undefined {

  let keyPath = keys

  for (let i = 0; i < toSearch.length; i++) {
    if (toSearch[i].title === keyPath[0]) {
      if (keyPath.length === 1) {
        return toSearch[i].content
      } else {
        return getContent(keyPath.slice(1), toSearch[i].content)
      }
    }
  }

}
