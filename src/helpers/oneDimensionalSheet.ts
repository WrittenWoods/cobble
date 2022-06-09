import { endOfTitlePath } from "./endOfTitlePath";
import { titlePathMatch } from "./titlePathMatch"
import { SearchBlock, SaveData, NestedBlock } from "./interfaces";

// Method for converting a nested object sheet into a more searchable one-dimensional sheet.

export const oneDimensionalSheet = function convertNestedSheetToOneDimensionalSheet
  (arr: any[], titlePath: string[] = []): SaveData {

  let sheetObject: SaveData = { sheetData: [], panelList: [] }

  function addNewPanelToPanelList(a: NestedBlock) {
    if (a.displayInfo.displayType === "new panel") {
      sheetObject.panelList.push({
        displayInfo: a.displayInfo,
        panelType: "menu",
        titlePath: [...titlePath, a.title]
      })
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (endOfTitlePath(arr[i])) {
      sheetObject.sheetData.push( { titlePath: [...titlePath, arr[i].title], content: arr[i].content } )
      addNewPanelToPanelList(arr[i])
    } else {
      let nested = oneDimensionalSheet(arr[i].content, [...titlePath, arr[i].title])
      sheetObject.sheetData.push(...nested.sheetData)
      addNewPanelToPanelList(arr[i])
      sheetObject.panelList.push(...nested.panelList)
    }
  }

  // Returns object with two properties, each containing an array
  // One represents character sheet data and one represents the state and arrangement of panels
  return sheetObject

}
