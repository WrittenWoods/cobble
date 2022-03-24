import React, { useState } from 'react';
import MenuItem from './MenuItem'

function Menu ({ sheet, setSheet, titlePath, setDisplayedPanels, displayedPanels }) {

  function titlePathMatch(sheetPath, inputPath) {
    let match = true
    for (let i = 0; i < inputPath.length; i++) {
      match = sheetPath.includes(inputPath[i])
    }
    return match
  }

  function menuItemList() {
    let result = []
    let filtered = sheet.filter( x => titlePathMatch(x.titlePath, titlePath) )
    filtered.forEach(x =>
      !result.includes(x.titlePath[titlePath.length]) && result.push(x.titlePath[titlePath.length])
    )
    return result
  }

  return (
    <ul>
      {menuItemList().map( x =>
        <MenuItem
          sheet={sheet}
          setSheet={setSheet}
          displayedPanels={displayedPanels}
          setDisplayedPanels={setDisplayedPanels}
          titlePath={[...titlePath, x]}
          key={[...titlePath, x].join('.') + 'menu item'}
        />
      )}
    </ul>
  )

}

export default Menu;
