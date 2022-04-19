import React, { useState } from 'react';
import MenuItem from './MenuItem'
import { titlePathMatch } from './helpers/titlePathMatch'
import { MenuProps } from './helpers/interfaces'
import { arrayEquals } from './helpers/arrayEquals'

function Menu ({ sheetState, titlePath }: MenuProps ) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  const [renderedMenu, setRenderedMenu] = useState(renderMenu())

  // Creates an array of selectable menu items to render as MenuItem components.

  function menuItemList() {
    let result: string[] = []
    let filtered = sheet.filter( x => titlePathMatch(x.titlePath, titlePath) )
    filtered.forEach(x =>
      !result.includes(x.titlePath[titlePath.length]) && result.push(x.titlePath[titlePath.length])
    )
    return result
  }

  // Adds a new menu item

  function addMenuItem() {
    let lastIndex = 0
    let newSheet = sheet
    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].titlePath.slice(0, titlePath.length), titlePath)) {
        lastIndex = i
      }
    }
    newSheet.splice(lastIndex + 1, 0, { titlePath: [...titlePath.slice(0, titlePath.length), "new item"], content: "new item" })
    setSheet(newSheet)
    setRenderedMenu(renderMenu())
  }

  function renderMenu() {
    console.log(titlePath)
    return(
      menuItemList().map( x =>
        <MenuItem
          sheetState={[sheet, setSheet, displayed, setDisplayed]}
          newTitlePath={[...titlePath, x]}
          initialEditMode={x === "new item" ? true : false}
          key={[...titlePath, x].join('.') + 'menu item'}
        />
      )
    )
  }

  // Adds a new submenu

  // Creates a menu of selectable MenuItem components.

  return (
    <div>
      <button onClick={() => addMenuItem()}>add new menu item</button>
      <ul>
        {renderedMenu}
      </ul>
    </div>
  )

}

export default Menu;
