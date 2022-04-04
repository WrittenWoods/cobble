import React, { useState, useEffect } from 'react';
import { ListProps } from "./helpers/interfaces";

function List ({ sheetState, listContent }: ListProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  return (
    <ul>
      {listContent.map( e => <li>{e}</li> )}
    </ul>
  )

}

export default List;
