import React from 'react';
import logo from './logo.svg';
import './App.css';
import { searchSheet } from "./helpers/searchSheet";
import { charSheet } from "./charSheet";
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";

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
console.log(searchSheet("scores", oneDimensionalSheet(charSheet)))
