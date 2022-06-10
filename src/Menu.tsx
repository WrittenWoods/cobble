import React, { useState } from 'react';
import MenuItem from './MenuItem'
import { crumbTrailMatch } from './helpers/crumbTrailMatch'
import { MenuProps } from './helpers/interfaces'
import { arrayEquals } from './helpers/arrayEquals'

// Accepts: Character sheet data and a breadcrumb trail through that sheet
// Returns: A rendered list of menu items.

function Menu ({ sheetState, crumbTrail }: MenuProps ) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // Creates an array of selectable menu items to render as MenuItem components.

  function menuItemList() {
    let result: string[] = []
    let filtered = sheet.filter( x => crumbTrailMatch(x.crumbTrail, crumbTrail) )
    filtered.forEach(x =>
      !result.includes(x.crumbTrail[crumbTrail.length]) && result.push(x.crumbTrail[crumbTrail.length])
    )
    return result
  }

  // Adds a new menu item or submenu

  function addMenuItem(str: string) {
    let lastIndex = 0
    let newSheet = sheet
    let newItem

    if (str === "menu item") {
      newItem = { crumbTrail: [...crumbTrail.slice(0, crumbTrail.length), "new item"], content: "new item" }
    } else if (str === "submenu") {
      newItem = { crumbTrail: [...crumbTrail.slice(0, crumbTrail.length), "new menu", "new item"], content: "new item" }
    }

    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].crumbTrail.slice(0, crumbTrail.length), crumbTrail)) {
        lastIndex = i
      }
    }
    if (newItem) { newSheet.splice(lastIndex + 1, 0, newItem) }
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
            newCrumbTrail={[...crumbTrail, x]}
            key={[...crumbTrail, x].join('.') + 'menu item'}
          />
        )}
      </ul>
    </div>
  )

}

export default Menu;
