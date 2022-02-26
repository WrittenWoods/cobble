import React from 'react';
import logo from './logo.svg';
import './App.css';
import { oneDimensionalSheet } from "./helpers/oneDimensionalSheet";
import { toNestedSheet } from "./helpers/toNestedSheet";
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
console.log(toNestedSheet(oneDimensionalSheet(charSheet)))
