import React, { useState } from 'react';
import MenuItem from './MenuItem'

function Menu ({ sheetState, titlePath }) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // Checks a sheet element to see if its titlePath property contains each element in titlePath prop

  function titlePathMatch(sheetPath) {
    let match = true
    for (let i = 0; i < titlePath.length; i++) {
      match = sheetPath.includes(titlePath[i])
    }
    return match
  }

  // Creates an array of selectable menu items to render as MenuItem components.

  function menuItemList() {
    let result = []
    let filtered = sheet.filter( x => titlePathMatch(x.titlePath) )
    filtered.forEach(x =>
      !result.includes(x.titlePath[titlePath.length]) && result.push(x.titlePath[titlePath.length])
    )
    return result
  }

  // Creates a menu of selectable MenuItem components.

  return (
    <ul>
      {menuItemList().map( x =>
        <MenuItem
          sheetState={[sheet, setSheet, displayed, setDisplayed]}
          newTitlePath={[...titlePath, x]}
          key={[...titlePath, x].join('.') + 'menu item'}
        />
      )}
    </ul>
  )

}

export default Menu;
