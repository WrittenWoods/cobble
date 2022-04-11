import React, { useState, useEffect } from 'react';
import { parseContent } from "./helpers/parseContent";
import { arrayEquals } from "./helpers/arrayEquals";
import { titlePathMatch } from "./helpers/titlePathMatch"
import { MenuItemProps, SearchBlock } from "./helpers/interfaces";
import ContextMenu from "./ContextMenu";

function MenuItem ({ sheetState, newTitlePath }: MenuItemProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]
  const [editMode, toggleEditMode] = useState(false)
  const [title, setTitle] = useState(newTitlePath[newTitlePath.length - 1])
  const [contentAtPath, setContentAtPath] = useState(getMenuItemVals()[2])
  const [showContextMenu, toggleContextMenu] = useState(false)

  let [isMatch, matchIndex] = [...getMenuItemVals().slice(0, 2)]
  let contentType = "menu";

  useEffect(() => {
    setContentAtPath(getMenuItemVals()[2])
  }, [sheet]);

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

    setSheet(updated)
  }

  // Handles clicks of the edit/save buttons

  function handleEditButtonClick() {
    toggleEditMode(!editMode)
    updateSheet()
  }

  // Handles menu item context menu clicks

  function handleContextMenuClick(e) {
    e.preventDefault()
    toggleContextMenu(!showContextMenu)
  }

  // Displays new panel if not already displayed, moves it to front if it is.

  function handleMenuItemClick() {
    if (displayed.some(e => arrayEquals(e.panelProps, newTitlePath))) {
      console.log("this should bring the selected panel to the front")
    } else if (Array.isArray(contentAtPath)) {
      if ((displayed.some(e => arrayEquals(e.panelProps, contentAtPath)))) {
        console.log("this should bring the selected panel to the front")
      } else {
        setDisplayed([...displayed, { panelType: "list", panelProps: contentAtPath }])
      }
    } else if (!isMatch) {
      setDisplayed([...displayed, { panelType: "menu", panelProps: newTitlePath }])
    }
  }

  // returns the text of the menu item

  function menuItemContent() {

    let toRender: undefined | { contentType: string, parsedContent: string | string[] } = undefined
    if (contentAtPath) {
      toRender = parseContent(contentAtPath, sheet)
      contentType = toRender.contentType
    }

    if (isMatch && contentType === "text") {
      return (
        <span onContextMenu={(e) => handleContextMenuClick(e)} >
          {title + " : " + toRender.parsedContent}
        </span>
      )
    } else if (isMatch && contentType === "button") {
      return (
        <button
          onClick={() => console.log(parseContent(toRender.parsedContent, sheet, true).parsedContent) }
          onContextMenu={(e) => handleContextMenuClick(e)}
        >
          {title + " : " + toRender.parsedContent}
        </button>
      )
    } else if (!isMatch || isMatch && contentType === "list") {
      return (
        <span
          onClick={() => handleMenuItemClick()}
          onContextMenu={(e) => handleContextMenuClick(e)}
        >
          {title}
        </span>
      )
    }

  }

  // returns content of the menu item component when editMode is toggled on

  function editModeContent() {
    if (isMatch && contentType === 'text' || 'button') {
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
      {showContextMenu
        &&
      <ContextMenu
        contextMenuState={[contentType, toggleEditMode, showContextMenu]}
      />}
    </li>
  )
}

export default MenuItem;
