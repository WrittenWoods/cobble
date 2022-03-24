import React, { useState, useEffect } from 'react';
import { parseContent } from "./helpers/parseContent";

function MenuItem ({ sheet, titlePath, displayedPanels, setDisplayedPanels }) {
  
  return (
    <li>
      {titlePath[titlePath.length - 1]}
    </li>
  )
}

export default MenuItem;
