import React, { useState } from 'react';
import Menu from "./Menu";

function Sheet ({ sheet, setSheet }) {

  const [displayedPanels, setDisplayedPanels] = useState([[]])

  return (
    <div>
      {displayedPanels.map( titlePath =>
        <Menu
          sheet={sheet}
          setSheet={setSheet}
          displayedPanels={displayedPanels}
          setDisplayedPanels={setDisplayedPanels}
          titlePath={titlePath}
          key={titlePath.join('.') + 'panel'}
        />
      )}
    </div>
  )

}

export default Sheet;
