import React from 'react';
import logo from './logo.svg';
import './App.css';
import { parseBracket } from './helpers/parseBracket';
import { getContent } from "./helpers/getContent";
import { getKeysFromString } from "./helpers/getKeysFromString";
import { charSheet } from "./charSheet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(getContent(getKeysFromString("spellbook.spells.cantrips"), charSheet))}</p>
      </header>
    </div>
  );
}

export default App;
