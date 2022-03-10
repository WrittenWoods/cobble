import React from 'react';
import Block from "./Block";

export default function Page(props) {
  return (
    <ul>
      {props.sheetData.map(x =>
        <Block
          sheetData={props.sheetData}
          titlePath={x.titlePath}
          content={x.content}
        />
      )}
    </ul>
  )
}
