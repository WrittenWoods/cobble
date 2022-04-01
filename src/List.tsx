import React, { useState, useEffect } from 'react';

function List ({ sheetState, listContent }) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  return (
    <ul>
      {listContent.map( e => <li>{e}</li> )}
    </ul>
  )

}

export default List;
