import React from 'react';
import logo from './logo.svg';
import './App.css';
import { parseBracket } from './helpers/parseBracket';
import { charSheet } from "./charSheet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{parseBracket("1d8 + dexterity + 2d6 + 2 + 4")}</p>
      </header>
    </div>
  );
}

export default App;
