import React, { useState } from 'react';
import './App.css';
import { starterSheetData } from "./starterSheetData";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { NestedBlock, SearchBlock } from "./helpers/interfaces";
import { parseContent } from "./helpers/parseContent";
import Sheet from "./Sheet";

function App() {

  const [sheet, setSheet] = useState(oneDimensionalSheet(starterSheetData))

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
