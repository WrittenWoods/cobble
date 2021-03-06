import React, { useState, useEffect } from 'react';
import { toNestedSheet } from "./helpers/toNestedSheet";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { SaveMenuProps } from "./helpers/interfaces";

function SaveMenu ({ sheet, setSheet }: SaveMenuProps ) {

  const [showSaveData, setShowSaveData] = useState(false)
  const [showLoadField, setShowLoadField] = useState(false)
  const [loadFieldContent, setLoadFieldContent] = useState("")
  const [showError, setShowError] = useState(false)

  function handleLoadButtonClick() {

    if (showLoadField) {
      if (loadFieldContent.trim().length === 0) {
        setShowLoadField(false)
      } else {
        try {
          setSheet(oneDimensionalSheet(JSON.parse(loadFieldContent)))
          setShowError(false)
          setShowLoadField(false)
        } catch {
          setShowError(true)
        }
      }
    }

    if (!showLoadField) { setShowLoadField(true) }
  }

  return (
    <div>
      <button onClick={() => setShowSaveData(!showSaveData)}>save</button>
      <button onClick={() => handleLoadButtonClick()}>load</button>
      { showSaveData && <textarea value={JSON.stringify(toNestedSheet(sheet))} /> }
      { showLoadField && <textarea value={loadFieldContent} onChange={(e) => setLoadFieldContent(e.target.value)} /> }
      { showError && <p>Try again bud</p> }
    </div>
  )

}

export default SaveMenu;
