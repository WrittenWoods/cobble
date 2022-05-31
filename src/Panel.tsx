import React, { useState, useEffect } from 'react';
import './Panel.css';
import Menu from "./Menu";
import ContentBlock from "./ContentBlock";
import { PanelProps } from "./helpers/interfaces";

function Panel ({ sheetState, panelContent }: PanelProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  // uses the panelType property of panelState to render a corresponding component.

  function renderPanelContents() {
    if (panelContent.panelType === "menu") {
      return (
        <Menu
          sheetState={sheetState}
          titlePath={panelContent.titlePath}
        />
      )
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
    if ('blockString' in panelContent || panelContent.titlePath.length !== 0) {
      return (
        <button onClick={
          () => setDisplayed(displayed.filter(
             x => x.titlePath !== panelContent.titlePath || x.blockString !== panelContent.blockString
          ))
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
