import React, { useState } from 'react';
import { DropdownProps } from "./helpers/interfaces";

function Dropdown ({ contentType, toggleEditMode, showDropdownMenu }: DropdownProps) {

  const [dropdownItems, setDropdownItems] = useState([...dropdownContents()])

  document.addEventListener("click", function(e) {console.log(e.target)} )

  function dropdownContents() {
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
      {dropdownItems.map(x => <li>{x}</li>)}
    </ul>
  )

}

export default Dropdown;
