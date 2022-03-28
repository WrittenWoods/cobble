import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import Panel from "./Panel";

function Sheet ({ sheet, setSheet }) {

  const [displayedMenus, setDisplayedMenus] = useState([[]])
  const [displayed, setDisplayed] = useState([])

  function renderMenu(titlePath) {
    return (
      <Menu
        sheet={sheet}
        setSheet={setSheet}
        displayedMenus={displayedMenus}
        setDisplayedMenus={setDisplayedMenus}
        titlePath={titlePath}
      />
    )
  }

  useEffect(() => {
    setDisplayed(displayedMenus.map(titlePath => renderMenu(titlePath)))
  }, [displayedMenus]);

  return (
    <div>
      {displayed.map( panelContent =>
        <Panel
          sheet={sheet}
          setSheet={setSheet}
          displayedMenus={displayedMenus}
          setDisplayedMenus={setDisplayedMenus}
          panelContent={panelContent}
        />
      )}
    </div>
  )

}

export default Sheet;
