import React, { useState, useEffect } from 'react';
import Panel from "./Panel";
import { arrayEquals } from "./helpers/interfaces";
import { SheetProps } from "./helpers/interfaces";

function Sheet ({ sheet, setSheet }: SheetProps) {

  // Array of props for each currently open panel
  const [displayed, setDisplayed] = useState([{ panelType: "menu", panelProps: [] }])

  // Renders a Panel component for each object in "displayed" state.
  return (
    <div>
      <button onClick={() => setDisplayed([{ panelType: "menu", panelProps: [] }]) }>reset</button>
      {displayed.map( panelContent =>
        <Panel
          sheetState={[sheet, setSheet, displayed, setDisplayed]}
          panelContent={panelContent}
          key={JSON.stringify(panelContent.panelProps) + ' panel'}
        />
      )}
    </div>
  )

}

export default Sheet;
