import React, { useState } from 'react';
import MenuItem from './MenuItem'
import { titlePathMatch } from './helpers/titlePathMatch'
import { MenuProps } from './helpers/interfaces'
import { arrayEquals } from './helpers/arrayEquals'

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

  // Adds a new menu item or submenu

  function addMenuItem(str) {
    let lastIndex = 0
    let newSheet = sheet
    let newItem

    if (str === "menu item") {
      newItem = { titlePath: [...titlePath.slice(0, titlePath.length), "new item"], content: "new item" }
    } else if (str === "submenu") {
      newItem = { titlePath: [...titlePath.slice(0, titlePath.length), "new menu", "new item"], content: "new item" }
    }

    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].titlePath.slice(0, titlePath.length), titlePath)) {
        lastIndex = i
      }
    }
    newSheet.splice(lastIndex + 1, 0, newItem)
    setSheet([...newSheet])
  }

  // Creates a menu of selectable MenuItem components.

  return (
    <div>
      <button onClick={() => addMenuItem("menu item")}>add new menu item</button>
      <button onClick={() => addMenuItem("submenu")}>add new submenu</button>
      <ul>
        {menuItemList().map( x =>
          <MenuItem
            sheetState={[sheet, setSheet, displayed, setDisplayed]}
            newTitlePath={[...titlePath, x]}
            key={[...titlePath, x].join('.') + 'menu item'}
          />
        )}
      </ul>
    </div>
  )

}

export default Menu;
