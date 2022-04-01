import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import List from "./List";
import Panel from "./Panel";

function Sheet ({ sheet, setSheet }) {

  // Array of props for each currently open panel
  const [displayed, setDisplayed] = useState([])

  useEffect(() => {
    // Displays initial menu if "displayed" array in state is emptied
    if (displayed.length === 0) { setDisplayed([{ panelType: "menu", panelProps: [] }]) }
  }, [displayed]);

  // Renders a Panel component for each object in "displayed" state.
  return (
    <div>
      {displayed.map( panelContent =>
        <Panel
          sheetState={[sheet, setSheet, displayed, setDisplayed]}
          panelContent={panelContent}
          key={panelContent.panelProps.join('.') + ' panel'}
        />
      )}
    </div>
  )

}

export default Sheet;
