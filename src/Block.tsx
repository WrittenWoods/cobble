import React, { useState } from 'react';
import { getOneDContent } from "./helpers/getOneDContent";
import { parseContent } from "./helpers/parseContent";

export default function Block (props) {
  return (
    <li>{props.titlePath.join(".") + " : " + parseContent(props.content, props.sheetData)}</li>
  )
}
