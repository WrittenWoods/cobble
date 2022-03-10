import React, { useState } from 'react';
import { SearchBlock } from "./helpers/interfaces";
import { parseContent } from "./helpers/parseContent"

// Component that represents individual blocks in a character sheet
// including blocks that may contain other blocks

export default function Block (props) {

  // TSX return for the component

  return (
    <li>{props.titlePath.join(".") + " : " + parseContent(props.content, props.sheetData)}</li>
  )
}
