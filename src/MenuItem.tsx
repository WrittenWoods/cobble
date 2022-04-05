import React, { useState, useEffect } from 'react';
import { parseContent } from "./helpers/parseContent";
import { arrayEquals } from "./helpers/arrayEquals";
import { parseSheet } from "./helpers/parseSheet";
import { titlePathMatch } from "./helpers/titlePathMatch"
import { MenuItemProps, SearchBlock } from "./helpers/interfaces";

function MenuItem ({ sheetState, newTitlePath }: MenuItemProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]
  const [editMode, toggleEditMode] = useState(false)
  const [title, setTitle] = useState(newTitlePath[newTitlePath.length - 1])
  const [contentAtPath, setContentAtPath] = useState(getMenuItemVals()[2])

  let [isMatch, matchIndex] = [getMenuItemVals()[0], getMenuItemVals()[1]]

  // Represents whether there's an element in the sheet matching the new titlePath
  // If there is, assigns the "content" property of that element to contentAtPath

  function getMenuItemVals () {
    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].titlePath, newTitlePath)) {
        return [true, i, sheet[i].content]
      }
    }
    return [false, undefined, undefined]
  };

  function getContentAtPath() {
    let result
    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].titlePath, newTitlePath)) {
        result = sheet[i].content
      }
    }
    return result
  };

  // Updates sheet with edited title and content values

  function updateSheet() {

    let updated = [...sheet]

    function replaceTitle(arr: SearchBlock[]) {
      for (let i = 0; i < arr.length; i++) {
        if (titlePathMatch(arr[i].titlePath, newTitlePath)) {
          arr[i].titlePath[newTitlePath.length - 1] = title
        }
      }
    }

    if (isMatch) {
      updated[matchIndex].content = contentAtPath
      replaceTitle(updated)
    } else {
      replaceTitle(updated)
    }

    setDisplayed(displayed.map(e => {
      if (e.panelType === "menu" && titlePathMatch(e.panelProps, newTitlePath)) {
        let newProps = e.panelProps
        newProps[newTitlePath.length - 1] = title
        return { panelType: "menu", panelProps: newProps }
      } else {
        return e
      }
    }))

    setSheet(parseSheet(updated))
  }

  // Handles clicks of the edit/save buttons

  function handleEditButtonClick() {
    toggleEditMode(!editMode)
    updateSheet()
  }

  // Displays new panel if not already displayed, moves it to front if it is.

  function handleMenuItemClick() {
    if (displayed.some(e => arrayEquals(e.panelProps, newTitlePath))) {
      console.log("this should bring the selected panel to the front")
    } else if (Array.isArray(contentAtPath)) {
      setDisplayed([...displayed, { panelType: "list", panelProps: contentAtPath }])
    } else if (!isMatch) {
      setDisplayed([...displayed, { panelType: "menu", panelProps: newTitlePath }])
    }
  }

  // returns the text of the menu item

  function menuItemContent() {
    if (isMatch && typeof contentAtPath === 'string') {
      return <span>{newTitlePath[newTitlePath.length - 1] + " : " + contentAtPath}</span>
    } else if (!isMatch || Array.isArray(contentAtPath)) {
      return (
        <span onClick={() => handleMenuItemClick()}>
          {newTitlePath[newTitlePath.length - 1]}
        </span>
      )
    }
  }

  function editModeContent() {
    if (isMatch && typeof contentAtPath === 'string') {
      return (
        <span>
          <textarea value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={contentAtPath} onChange={(e) => setContentAtPath(e.target.value)} />
        </span>
      )
    } else if (!isMatch || Array.isArray(contentAtPath)) {
      return (
        <span>
          <textarea value={title} onChange={(e) => setTitle(e.target.value)} />
        </span>
      )
    }
  }

  // Renders individual menu item.

  return (
    <li>
      <button onClick={() => handleEditButtonClick()}>{editMode ? "save" : "edit"}</button>
      {editMode ? editModeContent() : menuItemContent()}
    </li>
  )
}

export default MenuItem;
