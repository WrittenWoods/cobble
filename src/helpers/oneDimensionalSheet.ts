export const oneDimensionalSheet = function convertNestedSheetToOneDimensionalSheet
  (arr: any[], titlePath: any[] = []): object[] {

  let newArr = []
  let titleArray = titlePath

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i].content === "string") {
      newArr.push( { titlePath: [...titleArray, arr[i].title], content: arr[i].content } )
    } else if (Array.isArray(arr[i].content)) {
      if (arr[i].content.every( function allStrings(a: object | string) { return typeof a === "string" } )) {
        newArr.push( { titlePath: [...titleArray, arr[i].title], content: arr[i].content } )
      } else {
        newArr.push(...oneDimensionalSheet(arr[i].content, [...titleArray, arr[i].title]))
      }
    }
  }

  return newArr

}
