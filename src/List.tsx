import React, { useState, useEffect } from 'react';
import { ListProps } from "./helpers/interfaces";
import { parseContent } from "./helpers/parseContent";

function List ({ sheetState, listContent }: ListProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  function listItemContent(e: string) {
    let toRender: undefined | { contentType: string, parsedContent: string | string[] } = undefined
    if (e) { toRender = parseContent(e, sheet) }

    if (toRender.contentType === "text") {
      return <span>{toRender.parsedContent}</span>
    } else if (toRender.contentType === "button") {
      return (
        <button onClick={() => console.log(parseContent(toRender.parsedContent, sheet, true).parsedContent) } >
          {toRender.parsedContent}
        </button>
      )
    }
  }

  return (
    <ul>
      {listContent.map( (e, index) => <li key={e + index}>{listItemContent(e)}</li> )}
    </ul>
  )

}

export default List;
