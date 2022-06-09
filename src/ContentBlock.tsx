import React, { useState, useEffect } from 'react';
import { arrayEquals } from "./helpers/arrayEquals";
import { ContentBlockProps } from "./helpers/interfaces";
import ParsedContent from "./ParsedContent";

// This component represents the content of a panel whose purpose is to display that content

function ContentBlock({ sheetState, titlePath = [], blockString = "" }: ContentBlockProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // Represents the content to be passed into and parsed by ParsedContent component
  const [blockContent, setBlockContent] = useState(getBlockContent())

  // Returns the content in a sheet corresponding to a titlepath, if present.
  // If absent, returns the string passed in as an argument.

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

  // Returns a component representing the parsed content of a field in the sheet.

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
