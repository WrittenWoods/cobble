import React, { useState, useEffect } from 'react';

function List ({ listState, listContent }) {

  const [sheet, setSheet, displayed, setDisplayed] = [...listState]

  return (
    <ul>
      {listContent.map( e => <li>{e}</li> )}
    </ul>
  )

}

export default List;
