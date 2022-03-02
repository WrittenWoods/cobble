import React from 'react';
import logo from './logo.svg';
import './App.css';
import { starterSheet } from "./starterSheet";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { getOneDContent } from "./helpers/getOneDContent";
import { interpretStringInput } from "./helpers/interpretStringInput";
import { Snippet, SearchSnippet } from "./helpers/interfaces";

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

console.log(interpretStringInput("I deal [1d10 + mainpage.abilityScores.dexterity + mainPage.proficiencyBonus] slashing damage and [1d8 + mainpage.proficiencyBonus] fire damage", oneDimensionalSheet(starterSheet)))
