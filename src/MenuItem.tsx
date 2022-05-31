import React, { useState, useEffect } from 'react';
import { arrayEquals } from "./helpers/arrayEquals";
import { titlePathMatch } from "./helpers/titlePathMatch"
import { MenuItemProps, SearchBlock } from "./helpers/interfaces";
import ParsedContent from "./ParsedContent";

function MenuItem ({ sheetState, newTitlePath }: MenuItemProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  const [editMode, toggleEditMode] = useState(false)
  const [title, setTitle] = useState(newTitlePath[newTitlePath.length - 1])
  const [contentAtPath, setContentAtPath] = useState(getMenuItemVals().contentAtPath)
  const [showInPanel, toggleShowInPanel] = useState(true)

  let { isMatch, matchIndex } = getMenuItemVals()

  useEffect(() => {
    setContentAtPath(getMenuItemVals().contentAtPath)
  }, [sheet]);

  // Represents whether there's an element in the sheet matching the new titlePath
  // If there is, assigns the "content" property of that element to contentAtPath

  function getMenuItemVals () {
    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].titlePath, newTitlePath)) {
        return { isMatch: true, matchIndex: i, contentAtPath: sheet[i].content }
      }
    }
    return { isMatch: false, matchIndex: NaN, contentAtPath: "" }
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

    if (isMatch && showInPanel) {
      updated[matchIndex].content = contentAtPath
      replaceTitle(updated)
    } else {
      replaceTitle(updated)
    }

    setDisplayed(displayed.map(e => {
      if (e.panelType === "menu" && 'titlePath' in e && titlePathMatch(e.titlePath, newTitlePath)) {
        let newProps = e.titlePath
        newProps[newTitlePath.length - 1] = title
        return { panelType: "menu", titlePath: newProps }
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

  // Handles clicks of the delete button

  function handleDeleteButtonClick() {
    let toDisplay = displayed.filter(
      x => 'titlePath' in x && !arrayEquals(newTitlePath, x.titlePath.slice(0, newTitlePath.length))
    )
    let updated = sheet.filter(
      x => 'titlePath' in x && !arrayEquals(newTitlePath, x.titlePath.slice(0, newTitlePath.length))
    )
    setDisplayed(toDisplay)
    setSheet(updated)
  }

  // Displays new panel if not already displayed, moves it to front if it is.

  function handleMenuItemClick() {
    if (displayed.some(e => 'titlePath' in e && arrayEquals(e.titlePath, newTitlePath))) {
      console.log("this should bring the selected panel to the front")
    } else if (!isMatch) {
      setDisplayed([...displayed, { panelType: "menu", titlePath: newTitlePath }])
    }
  }

  function openContentPanel() {
    if (!showInPanel && !displayed.some( x => 'titlePath' in x && arrayEquals(x.titlePath, newTitlePath) )) {
      setDisplayed([...displayed, { panelType: "content", titlePath: newTitlePath }])
    }
  }

  function handleShowInPanelButton() {
    if (!showInPanel) {
      setDisplayed(displayed.filter(x => 'titlePath' in x && x.panelType !== "content" && x.titlePath !== newTitlePath))
    }
    toggleShowInPanel(!showInPanel)
  }

  // returns the text of the menu item

  function menuItemContent() {

    if (isMatch) {
      return (
        <span>
          <button onClick={() => handleShowInPanelButton()}>
            {showInPanel ? "show in new window" : "show in panel"}
          </button>
          <span onClick={() => openContentPanel()}>
            {
              showInPanel ?
                <>
                  <span>{title}:</span>
                  <ParsedContent sheetState={sheetState} contentAtPath={contentAtPath} />
                </>
                  :
                <span>{title}</span>
            }
          </span>
        </span>
      )
    } else if (!isMatch) {
      return (
        <span
          onClick={() => handleMenuItemClick()}
        >
          {title}
        </span>
      )
    }
  }

  // returns content of the menu item component when editMode is toggled on

  function editModeContent() {
    if (isMatch) {
      return (
        <span>
          <textarea value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={contentAtPath} onChange={(e) => setContentAtPath(e.target.value)} />
        </span>
      )
    } else if (!isMatch) {
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
      <button onClick={() => handleDeleteButtonClick()} >delete</button>
      <button onClick={() => handleEditButtonClick()}>{editMode ? "save" : "edit"}</button>
      {editMode ? editModeContent() : menuItemContent()}
    </li>
  )
}

export default MenuItem;
