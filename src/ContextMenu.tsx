import React, { useState } from 'react';

function ContextMenu ({ contextMenuState }) {

  const [contentType, toggleEditMode, showContextMenu] = [...contextMenuState]

  const [contextItems, setContextItems] = useState([...contextMenuContents()])

  document.addEventListener("click", function(e) {console.log(e.target)} )

  function contextMenuContents() {
    let result = []

    if (["text", "menu"].includes(contentType)) {
      result.push(
        <button onClick={() => toggleEditMode(true)}>
          Edit
        </button>
      )
    }

    return result
  }

  return (
    <ul>
      {contextItems.map(x => <li>{x}</li>)}
    </ul>
  )

}

export default ContextMenu;
