import { endOfTitlePath } from "./endOfTitlePath";
import { SearchSnippet } from "./interfaces";

// Method for converting a nested object sheet into a more searchable one-dimensional sheet.

export const oneDimensionalSheet = function convertNestedSheetToOneDimensionalSheet
  (arr: any[], titlePath: string[] = []): SearchSnippet[] {

  let newArr: SearchSnippet[] = []
  let titleArray = titlePath

  for (let i = 0; i < arr.length; i++) {
    if (endOfTitlePath(arr[i])) {
      newArr.push( { titlePath: [...titleArray, arr[i].title], content: arr[i].content } )
    } else {
      newArr.push(...oneDimensionalSheet(arr[i].content, [...titleArray, arr[i].title]))
    }
  }

  // Returns one-dimensional array of SearchSnippets.

  return newArr

}
