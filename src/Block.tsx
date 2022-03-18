import React, { useState, useEffect } from 'react';
import { SearchBlock } from "./helpers/interfaces";
import { parseContent } from "./helpers/parseContent"
import { arrayEquals } from "./helpers/arrayEquals"

// Component that represents individual blocks in a character sheet
// including blocks that may contain other blocks

export default function Block (props) {
  const [editMode, toggleEditMode] = useState(false)
  const [content, setContent] = useState(props.content)
  const [text, setText] = useState(props.content)

  function updateSheet(block) {
    let arr = [...props.loadedSheet]
    let newBlock = true

    for (let i = 0; i < arr.length; i++) {
      if (arrayEquals(arr[i].titlePath, block.titlePath)) {
        newBlock = false
        arr[i] = block
      }
    }

    if (newBlock) { arr.push(block) }

    props.setLoadedSheet(arr)
  }

  useEffect(() => {
    updateSheet({ titlePath: props.titlePath, content: content })
  }, [content])

  // TSX return for the component

  return (
    <div>
      <button onClick={() => { setContent(text); toggleEditMode(!editMode) }}>
        {editMode ? "save" : "edit"}
      </button>
      <span>
        {editMode ?
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          : props.titlePath.join(".") + " : " + parseContent(content, props.loadedSheet)
        }
      </span>
    </div>
  )
}
