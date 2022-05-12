import React, { useState, useEffect } from 'react';
import { toNestedSheet } from "./helpers/toNestedSheet";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";

function SaveMenu ({ sheet, setSheet }) {

  const [showSaveData, setShowSaveData] = useState(false)
  const [showLoadField, setShowLoadField] = useState(false)
  const [loadFieldContent, setLoadFieldContent] = useState("")

  function handleLoadButtonClick() {
    if (showLoadField && loadFieldContent) {
      setSheet(oneDimensionalSheet(JSON.parse(loadFieldContent)))
    }
    console.log(showLoadField)
    setShowLoadField(!showLoadField)
  }

  return (
    <div>
      <button onClick={() => setShowSaveData(!showSaveData)}>save</button>
      <button onClick={() => handleLoadButtonClick()}>load</button>
      { showSaveData && <textarea value={JSON.stringify(toNestedSheet(sheet))} /> }
      { showLoadField && <textarea value={loadFieldContent} onChange={(e) => setLoadFieldContent(e.target.value)} /> }
    </div>
  )

}

export default SaveMenu;
