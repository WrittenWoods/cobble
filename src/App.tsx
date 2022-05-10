import React, { useState } from 'react';
import './App.css';
import { starterSheetData } from "./starterSheetData";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { NestedBlock, SearchBlock } from "./helpers/interfaces";
import { AppState } from "./helpers/types"
import Sheet from "./Sheet";

function App() {

  const [sheet, setSheet]: AppState = useState(oneDimensionalSheet(starterSheetData))

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cobble</h2>
      </header>
      <Sheet
        sheet={sheet}
        setSheet={setSheet}
      />
    </div>
  );
}

export default App;
