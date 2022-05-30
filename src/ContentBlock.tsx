import React, { useState, useEffect } from 'react';
import { arrayEquals } from "./helpers/arrayEquals";
import { ContentBlockProps } from "./helpers/interfaces";
import ParsedContent from "./ParsedContent";

function ContentBlock({ sheetState, titlePath = [], blockString = "" }: ContentBlockProps) {

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
        sheetState={sheetState}
        contentAtPath={blockContent}
      />
    </span>
  )
}

export default ContentBlock;
