import React, { useState } from 'react';
import './App.css';
import { starterSheetData } from "./starterSheetData";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { NestedBlock, SearchBlock } from "./helpers/interfaces";
import { AppState } from "./helpers/types"
import { parseSheet } from "./helpers/parseSheet";
import Sheet from "./Sheet";

function App() {

  const [sheet, setSheet]: AppState = useState(parseSheet(oneDimensionalSheet(starterSheetData)))

  return (
    <div className="App">
      <header className="App-header">
        <Sheet
          sheet={sheet}
          setSheet={setSheet}
        />
      </header>
    </div>
  );
}

export default App;
