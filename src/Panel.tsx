import React, { useState, useEffect } from 'react';
import './Panel.css';
import Menu from "./Menu";
import ContentBlock from "./ContentBlock";
import { PanelProps, StringPanel, MenuPanel } from "./helpers/interfaces";

// Accepts: Character sheet data, panel data and the index of that panel in the "displayed" state variable.
// Returns: JSX of an open panel of a character sheet

function Panel ({ sheetState, panelContent, displayedIndex }: PanelProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // uses the panelType property of panelState to render a corresponding component.

  function renderPanelContents() {
    if (panelContent.panelType === "menu") {
      if ('crumbTrail' in panelContent && Array.isArray(panelContent.crumbTrail)) {
        return (
          <Menu
            sheetState={sheetState}
            crumbTrail={panelContent.crumbTrail}
          />
        )
      }
    } else if (panelContent.panelType === "content") {
      if ('crumbTrail' in panelContent) {
        return (
          <ContentBlock
            sheetState={sheetState}
            crumbTrail={panelContent.crumbTrail}
          />
        )
      } else if ('blockString' in panelContent) {
        return (
          <ContentBlock
            sheetState={sheetState}
            blockString={panelContent.blockString}
          />
        )
      }
    }
  }

  // Closes a displayed panel by removing it from the displayed state in Sheet.tsx

  function closePanel() {
    if ('blockString' in panelContent || Array.isArray(panelContent.crumbTrail) && panelContent.crumbTrail.length !== 0) {
      return (
        <button onClick={() => setDisplayed(displayed.filter( (x, i) => i !== displayedIndex ))}>x</button>
      )
    }
  }

  // Renders the panel with contents.

  return (
    <div className="Panel" >
      {closePanel()}
      {renderPanelContents()}
    </div>
  )

}

export default Panel;
