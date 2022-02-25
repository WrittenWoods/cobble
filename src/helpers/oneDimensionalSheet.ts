import { endOfTitlePath } from "./endOfTitlePath";

export const oneDimensionalSheet = function convertNestedSheetToOneDimensionalSheet
  (arr: any[], titlePath: any[] = []): object[] {

  let newArr = []
  let titleArray = titlePath

  for (let i = 0; i < arr.length; i++) {
    if (endOfTitlePath(arr[i])) {
      newArr.push( { titlePath: [...titleArray, arr[i].title], content: arr[i].content } )
    } else {
      newArr.push(...oneDimensionalSheet(arr[i].content, [...titleArray, arr[i].title]))
    }
  }

  return newArr

}
