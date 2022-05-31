import React, { useState, useEffect } from 'react';
import './Panel.css';
import Menu from "./Menu";
import ContentBlock from "./ContentBlock";
import { PanelProps, ContentPanel, MenuPanel } from "./helpers/interfaces";

function Panel ({ sheetState, panelContent }: PanelProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // uses the panelType property of panelState to render a corresponding component.

  function renderPanelContents() {
    if (panelContent.panelType === "menu") {
      if ('titlePath' in panelContent && Array.isArray(panelContent.titlePath)) {
        return (
          <Menu
            sheetState={sheetState}
            titlePath={panelContent.titlePath}
          />
        )
      }
    } else if (panelContent.panelType === "content") {
      if ('titlePath' in panelContent) {
        return (
          <ContentBlock
            sheetState={sheetState}
            titlePath={panelContent.titlePath}
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

  function closePanel() {

    function filterDisplayed(a: ContentPanel | MenuPanel) {
      if ('titlePath' in a) {
        return 'titlePath' in panelContent ? a.titlePath !== panelContent.titlePath : true
      } else if ('blockString' in a) {
        return 'blockString' in panelContent ? a.blockString !== panelContent.blockString : true
      }
    }

    if ('blockString' in panelContent || Array.isArray(panelContent.titlePath) && panelContent.titlePath.length !== 0) {
      return (
        <button onClick={() => setDisplayed(displayed.filter( x => filterDisplayed(x) ))}>x</button>
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
