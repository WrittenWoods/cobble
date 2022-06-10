import React, { useState, useEffect } from 'react';
import { arrayEquals } from "./helpers/arrayEquals";
import { ContentBlockProps } from "./helpers/interfaces";
import ParsedContent from "./ParsedContent";

// Accepts: Sheet data and either a breadcrumb trail or a string (not both).
// Returns: Either the string or content corresponding to a breadcrumb trail, as a ParsedContent component.

function ContentBlock({ sheetState, crumbTrail = [], blockString = "" }: ContentBlockProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // Represents the content to be passed into and parsed by ParsedContent component
  const [blockContent, setBlockContent] = useState(getBlockContent())

  // Returns the content in a sheet corresponding to a titlepath, if present.
  // If absent, returns the string passed in as an argument.

  function getBlockContent() {
    if (crumbTrail.length) {
      for (let i = 0; i < sheet.length; i++) {
        if (arrayEquals(sheet[i].crumbTrail, crumbTrail)) {
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
