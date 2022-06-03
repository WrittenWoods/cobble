import React, { useState } from 'react';
import './App.css';
import { starterSheetData } from "./starterSheetData";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { NestedBlock, SearchBlock, SaveData } from "./helpers/interfaces";
import { AppState } from "./helpers/types"
import SaveMenu from "./SaveMenu";
import Sheet from "./Sheet";

function App() {

  const [sheet, setSheet] = useState(oneDimensionalSheet(starterSheetData).sheetData)

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cobble</h2>
      </header>
      <SaveMenu
        sheet={sheet}
        setSheet={setSheet}
      />
      <Sheet
        sheet={sheet}
        setSheet={setSheet}
      />
    </div>
  );
}

export default App;
