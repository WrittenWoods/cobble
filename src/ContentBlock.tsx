import React, { useState, useEffect } from 'react';
import { arrayEquals } from "./helpers/arrayEquals";
import ParsedContent from "./ParsedContent";

function ContentBlock({ sheetState, titlePath = [], blockString = "" }) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  const [blockContent, setBlockContent] = useState(getBlockContent())

  function getBlockContent() {
    if (titlePath.length) {
      for (let i = 0; i < sheet.length; i++) {
        if (arrayEquals(sheet[i].titlePath, titlePath)) {
          return sheet[i].content
        }
      }
    }
    return blockString
  }

  return (
    <span>
      <ParsedContent
        contentProps={[sheet, blockContent, displayed, setDisplayed]}
      />
    </span>
  )
}

export default ContentBlock;
