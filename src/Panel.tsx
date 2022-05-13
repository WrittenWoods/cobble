import React, { useState, useEffect } from 'react';
import './Panel.css';
import Menu from "./Menu";
import ContentBlock from "./ContentBlock";
import ContextMenu from "./ContextMenu";
import { PanelProps } from "./helpers/interfaces";

function Panel ({ sheetState, panelContent }: PanelProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // uses the panelType property of panelState to render a corresponding component.

  function renderPanelContents() {
    if (panelContent.panelType === "menu") {
      return (
        <Menu
          sheetState={sheetState}
          titlePath={panelContent.panelProps}
        />
      )
    } else if (panelContent.panelType === "content") {
      if (Array.isArray(panelContent.panelProps)) {
        return (
          <ContentBlock
            sheetState={sheetState}
            titlePath={panelContent.panelProps}
          />
        )
      } else if (typeof panelContent.panelProps === "string") {
        return (
          <ContentBlock
            sheetState={sheetState}
            blockString={panelContent.panelProps}
          />
        )
      }
    } else if (panelContent.panelType === "context menu") {
      return (
        <ContextMenu
          sheetState={sheetState}
        />
      )
    }
  }

  function closePanel() {
    if (panelContent.panelProps.length !== 0) {
      return (
        <button onClick={
          () => setDisplayed(displayed.filter( x => x.panelProps !== panelContent.panelProps))
        }>x</button>
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
