import React, { useState, useEffect } from 'react';
import Panel from "./Panel";
import { arrayEquals } from "./helpers/arrayEquals";
import { SheetProps, StringPanel, MenuPanel } from "./helpers/interfaces";

// Accepts: One dimensional sheet data and a list of panels
// Returns: JSX representing the current state of that sheet

function Sheet ({ sheetData, panelList }: SheetProps) {

  // Initial menu object representing the root menu
  const initialMenu: (StringPanel | MenuPanel) = { displayInfo: { displayed: true, displayType: "root" }, panelType: "menu", crumbTrail: [] }

  // Represents array of currently open panels, consists of props that are passed into Panel.tsx
  const [displayed, setDisplayed] = useState([initialMenu, ...displayedPanelList()])

  // Currently loaded character sheet
  const [sheet, setSheet] = useState(sheetData)

  // Filters out non-displayed items in the panelList property of the loadedSave prop
  function displayedPanelList() {
    return panelList.filter( x => x.displayInfo.displayed )
  }

  // Renders a Panel component for each object in "displayed" state.
  return (
    <div>
      <button onClick={() => setDisplayed([initialMenu]) }>reset</button>
      {displayed.map( (panelContent, i) =>
        <Panel
          sheetState={[sheet, setSheet, displayed, setDisplayed]}
          panelContent={panelContent}
          displayedIndex={i}
          key={JSON.stringify(panelContent) + i.toString()}
        />
      )}
    </div>
  )

}

export default Sheet;
