import React, { useState, useEffect } from 'react';
import { parseContent } from "./helpers/parseContent";
import { arrayEquals } from "./helpers/arrayEquals";

function MenuItem ({ sheet, titlePath, displayedMenus, setDisplayedMenus }) {

  let contentAtPath;

  const isMatch = (function () {
    let match = false
    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].titlePath, titlePath)) {
        match = true
        contentAtPath = sheet[i].content
      }
    }
    return match
  })();

  function menuItemContent() {
    if (isMatch && typeof contentAtPath === 'string') {
      return titlePath[titlePath.length - 1] + " : " + contentAtPath
    } else if (!isMatch || Array.isArray(contentAtPath)) {
      return (
        <button onClick={() => setDisplayedMenus([...displayedMenus, titlePath])}>
          {titlePath[titlePath.length - 1]}
        </button>
      )
    }
  }

  return (
    <li>
      {menuItemContent()}
    </li>
  )
}

export default MenuItem;
