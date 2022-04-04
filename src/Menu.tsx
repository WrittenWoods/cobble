import React, { useState } from 'react';
import MenuItem from './MenuItem'
import { titlePathMatch } from './helpers/titlePathMatch'
import { MenuProps } from './helpers/interfaces'

function Menu ({ sheetState, titlePath }: MenuProps ) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // Creates an array of selectable menu items to render as MenuItem components.

  function menuItemList() {
    let result: string[] = []
    let filtered = sheet.filter( x => titlePathMatch(x.titlePath, titlePath) )
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
