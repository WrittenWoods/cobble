import React, { useState, useEffect } from 'react';

function Panel ({ sheet, setSheet, displayedMenus, setDisplayedMenus, titlePath, panelContent }) {

  return (
    <div>
      {panelContent}
    </div>
  )

}

export default Panel;
