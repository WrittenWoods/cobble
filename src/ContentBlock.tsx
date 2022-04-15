import React, { useState, useEffect } from 'react';
import { parseContent } from "./helpers/parseContent";
import { arrayEquals } from "./helpers/arrayEquals";

function ContentBlock({ sheetState, titlePath }) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  const [blockContent, setBlockContent] = useState(getBlockContent())

  function getBlockContent() {
    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].titlePath, titlePath)) {
        return sheet[i].content
      }
    }
    return undefined
  }

  return (
    <span>{blockContent}</span>
  )
}

export default ContentBlock;
