import { endOfCrumbTrail } from "./endOfCrumbTrail";
import { crumbTrailMatch } from "./crumbTrailMatch"
import { SearchBlock, SaveData, NestedBlock } from "./interfaces";

// Accepts: A nested object representing either a whole character sheet or part of it.
// Returns: An object with two properties, one representing the data on a character sheet
// and the other representing the state and arrangement of panels on the UI.

export const oneDimensionalSheet = function convertNestedSheetToOneDimensionalSheet
  (arr: any[], crumbTrail: string[] = []): SaveData {

  let sheetObject: SaveData = { sheetData: [], panelList: [] }

  function addNewPanelToPanelList(a: NestedBlock) {
    if (a.displayInfo.displayType === "new panel") {
      sheetObject.panelList.push({
        displayInfo: a.displayInfo,
        panelType: "menu",
        crumbTrail: [...crumbTrail, a.title]
      })
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (endOfCrumbTrail(arr[i])) {
      sheetObject.sheetData.push( { crumbTrail: [...crumbTrail, arr[i].title], content: arr[i].content } )
      addNewPanelToPanelList(arr[i])
    } else {
      let nested = oneDimensionalSheet(arr[i].content, [...crumbTrail, arr[i].title])
      sheetObject.sheetData.push(...nested.sheetData)
      addNewPanelToPanelList(arr[i])
      sheetObject.panelList.push(...nested.panelList)
    }
  }

  // Returns object with two properties, each containing an array
  // One represents character sheet data and one represents the state and arrangement of panels
  return sheetObject

}
