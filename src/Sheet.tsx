import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import List from "./List";
import Panel from "./Panel";

function Sheet ({ sheet, setSheet }) {

  const [displayedMenus, setDisplayedMenus] = useState([[]])
  const [displayedLists, setDisplayedLists] = useState([])
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

  function renderList(listContent) {
    return (
      <List
        sheet={sheet}
        setSheet={setSheet}
        displayedLists={displayedLists}
        setDisplayedLists={setDisplayedLists}
        listContent={listContent}
      />
    )
  }

  useEffect(() => {
    setDisplayed([
      ...displayedMenus.map(titlePath => renderMenu(titlePath)),
      ...displayedLists.map(listItems => renderList(listItems))
    ])
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
