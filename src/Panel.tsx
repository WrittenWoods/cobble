import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import ContentBlock from "./ContentBlock";
import ContextMenu from "./ContextMenu";
import { PanelProps } from "./helpers/interfaces";

function Panel ({ sheetState, panelContent }: PanelProps) {

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
      return (
        <ContentBlock
          sheetState={sheetState}
          titlePath={panelContent.panelProps}
        />
      )
    } else if (panelContent.panelType === "context menu") {
      return (
        <ContextMenu
          sheetState={sheetState}
        />
      )
    }
  }

  // Renders the panel with contents.

  return (
    <div>
      {renderPanelContents()}
    </div>
  )

}

export default Panel;
