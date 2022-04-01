import { parseContent } from "./parseContent";
import { SearchBlock } from "./interfaces";

export const parseSheet = function parseContentOfWholeSheetInCorrectOrder
  (sheet: SearchBlock[], toParse: SearchBlock[] = sheet): SearchBlock[] {

  for (let i = 0; i < sheet.length; i++) {
    sheet[i].content = parseContent(sheet[i].content, sheet)
  }

  return sheet

}
