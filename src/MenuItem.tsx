import React, { useState, useEffect } from 'react';
import { parseContent } from "./helpers/parseContent";
import { arrayEquals } from "./helpers/arrayEquals";

function MenuItem ({ sheetState, newTitlePath }) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  let contentAtPath;

  // Represents whether there's an element in the sheet matching the new titlePath
  // If there is, assigns the "content" property of that element to contentAtPath

  const isMatch = (function () {
    let match = false
    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].titlePath, newTitlePath)) {
        match = true
        contentAtPath = sheet[i].content
      }
    }
    return match
  })();

  // Displays new panel if not already displayed, moves it to front if it is.

  function handleClick() {
    if (displayed.some(e => arrayEquals(e.panelProps, newTitlePath))) {
      console.log("this should bring the selected panel to the front")
    } else {
      setDisplayed([...displayed, { panelType: "menu", panelProps: newTitlePath }])
    }
  }

  // returns the text of the menu item

  function menuItemContent() {
    if (isMatch && typeof contentAtPath === 'string') {
      return newTitlePath[newTitlePath.length - 1] + " : " + contentAtPath
    } else if (!isMatch || Array.isArray(contentAtPath)) {
      return (
        <span onClick={() => handleClick()}>
          {newTitlePath[newTitlePath.length - 1]}
        </span>
      )
    }
  }

  // Renders individual menu item.

  return (
    <li>
      {menuItemContent()}
    </li>
  )
}

export default MenuItem;
