import React from 'react';
import logo from './logo.svg';
import './App.css';
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { nestSnippet } from "./helpers/nestSnippet";
import { charSheet } from "./charSheet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hewwo</p>
      </header>
    </div>
  );
}

export default App;
// console.log(nestSnippet({ titlePath: ['spellbook', 'spells', '3rd level'], content: ['greater invisibility'] }, charSheet))
