import React, { useState } from 'react';
import './App.css';
import { starterSheetData } from "./starterSheetData";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { NestedBlock, SearchBlock, SaveData } from "./helpers/interfaces";
import SaveMenu from "./SaveMenu";
import Sheet from "./Sheet";

// Highest component in the hierarchy, represents the entire application.

function App() {

  const loadedSheet: SaveData = oneDimensionalSheet(starterSheetData.sheetData)

  // Contains an object with two properties, representing a character sheet
  // One property is an array containing sheet data, the other represents the state and arrangement of panels
  const [loadedSave, setLoadedSave] = useState(loadedSheet)

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cobble</h2>
      </header>
      <SaveMenu
        loadedSave={loadedSave}
      />
      <Sheet
        sheetData={loadedSave.sheetData}
        panelList={loadedSave.panelList}
      />
    </div>
  );
}

export default App;
