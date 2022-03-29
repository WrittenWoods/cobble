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

  function handleClick() {
    if (displayedMenus.some(e => arrayEquals(e, titlePath))) {
      console.log("this should bring the selected panel to the front")
    } else {
      setDisplayedMenus([...displayedMenus, titlePath])
    }
  }

  function menuItemContent() {
    if (isMatch && typeof contentAtPath === 'string') {
      return titlePath[titlePath.length - 1] + " : " + contentAtPath
    } else if (!isMatch || Array.isArray(contentAtPath)) {
      return (
        <span onClick={() => handleClick()}>
          {titlePath[titlePath.length - 1]}
        </span>
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
