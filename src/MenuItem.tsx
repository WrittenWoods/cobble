import React, { useState, useEffect } from 'react';
import { arrayEquals } from "./helpers/arrayEquals";
import { crumbTrailMatch } from "./helpers/crumbTrailMatch"
import { MenuItemProps, SearchBlock } from "./helpers/interfaces";
import ParsedContent from "./ParsedContent";

// Accepts: Sheet data and a breadcrumb trail through a character sheet.
// Returns: JSX for an individual item in a Menu component.

function MenuItem ({ sheetState, newCrumbTrail }: MenuItemProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  const [editMode, toggleEditMode] = useState(false)
  const [title, setTitle] = useState(newCrumbTrail[newCrumbTrail.length - 1])
  const [contentAtPath, setContentAtPath] = useState(getMenuItemVals().contentAtPath)
  const [showInPanel, toggleShowInPanel] = useState(true)

  let { isMatch, matchIndex } = getMenuItemVals()

  useEffect(() => {
    setContentAtPath(getMenuItemVals().contentAtPath)
  }, [sheet]);

  // Represents whether there's an element in the sheet matching the new crumbTrail
  // If there is, assigns the "content" property of that element to contentAtPath

  function getMenuItemVals () {
    for (let i = 0; i < sheet.length; i++) {
      if (arrayEquals(sheet[i].crumbTrail, newCrumbTrail)) {
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
        if (crumbTrailMatch(arr[i].crumbTrail, newCrumbTrail)) {
          arr[i].crumbTrail[newCrumbTrail.length - 1] = title
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
      if (e.panelType === "menu" && 'crumbTrail' in e && crumbTrailMatch(e.crumbTrail, newCrumbTrail)) {
        let newProps = e.crumbTrail
        newProps[newCrumbTrail.length - 1] = title
        return { displayInfo: { displayed: true, displayType: "new panel" }, panelType: "menu", crumbTrail: newProps }
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
      x => 'crumbTrail' in x && !arrayEquals(newCrumbTrail, x.crumbTrail.slice(0, newCrumbTrail.length))
    )
    let updated = sheet.filter(
      x => 'crumbTrail' in x && !arrayEquals(newCrumbTrail, x.crumbTrail.slice(0, newCrumbTrail.length))
    )
    setDisplayed(toDisplay)
    setSheet(updated)
  }

  // Displays new panel if not already displayed, moves it to front if it is.

  function handleMenuItemClick() {
    if (displayed.some(e => 'crumbTrail' in e && arrayEquals(e.crumbTrail, newCrumbTrail))) {
      console.log("this should bring the selected panel to the front")
    } else if (!isMatch) {
      setDisplayed([...displayed, { displayInfo: { displayed: true, displayType: "new panel" }, panelType: "menu", crumbTrail: newCrumbTrail }])
    }
  }

  // Opens a panel whose purpose it is to display content.

  function openStringPanel() {
    if (!showInPanel && !displayed.some( x => 'crumbTrail' in x && arrayEquals(x.crumbTrail, newCrumbTrail) )) {
      setDisplayed([...displayed, { displayInfo: { displayed: true, displayType: "new panel" }, panelType: "content", crumbTrail: newCrumbTrail }])
    }
  }

  // Toggles between showing content inline or in a new panel.
  // When user chooses to show content inline, closes content panel if open.

  function handleShowInPanelButton() {
    if (!showInPanel) {
      setDisplayed(displayed.filter(x => 'crumbTrail' in x && x.panelType !== "content" && x.crumbTrail !== newCrumbTrail))
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
          <span onClick={() => openStringPanel()}>
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
