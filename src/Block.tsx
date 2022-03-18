import React, { useState, useEffect } from 'react';
import { SearchBlock } from "./helpers/interfaces";
import { parseContent } from "./helpers/parseContent"
import { arrayEquals } from "./helpers/arrayEquals"

// Component that represents individual blocks in a character sheet
// including blocks that may contain other blocks

export default function Block (props: object) {
  const [editMode, toggleEditMode] = useState(false)
  const [blockValue, setBlockValue] = useState({ titlePath: props.titlePath, content: props.content })
  const [text, setText] = useState(props.content)
  const [title, setTitle] = useState(props.titlePath[props.titlePath.length - 1])

  function updateSheet() {
    let arr = [...props.loadedSheet]
    let newBlock = true

    for (let i = 0; i < arr.length; i++) {
      if (arrayEquals(arr[i].titlePath, props.titlePath)) {
        newBlock = false
        arr[i] = blockValue
      }
    }

    if (newBlock) { arr.push(block) }

    props.setLoadedSheet(arr)
  }

  useEffect(() => {
    updateSheet()
  }, [blockValue])

  // TSX return for the component

  return (
    <div>
      <button onClick={() => {
         setBlockValue({
           titlePath: [...props.titlePath.slice(0, props.titlePath.length - 1), title], content: text
         });
         toggleEditMode(!editMode) 
       }}>
        {editMode ? "save" : "edit"}
      </button>
        {editMode ?
          <span>
            <textarea value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </span>
          : <span>{props.titlePath.join(".") + " : " + parseContent(text, props.loadedSheet)}</span>
        }
    </div>
  )
}
