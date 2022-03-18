import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { starterSheetData } from "./starterSheetData";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { NestedBlock, SearchBlock } from "./helpers/interfaces";
import Sheet from "./Sheet";

function App() {

  const [loadedSheet, setLoadedSheet] = useState(oneDimensionalSheet(starterSheetData))
  const [text, setText] = useState("hewwo")

  return (
    <div className="App">
      <header className="App-header">
        <Sheet
          loadedSheet={loadedSheet}
          setLoadedSheet={setLoadedSheet}
        />
      </header>
    </div>
  );
}

export default App;
