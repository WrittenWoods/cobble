import React from 'react';
import logo from './logo.svg';
import './App.css';
import { starterSheet } from "./starterSheet";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { getOneDContent } from "./helpers/getOneDContent";
import { parseContent } from "./helpers/parseContent";
import { Snippet, SearchSnippet } from "./helpers/interfaces";
import { evaluate } from "mathjs";

const displaySheet = function returnListOfSnippets (sheet: Snippet[]) {
  return oneDimensionalSheet(sheet).map(
    e => <li>{e.titlePath[e.titlePath.length - 1] + " : " + e.content}</li>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {displaySheet(starterSheet)}
        </ul>
      </header>
    </div>
  );
}

export default App;
