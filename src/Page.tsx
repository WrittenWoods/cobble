import React from 'react';
import Block from "./Block";

export default function Page(props) {
  return (
    <ul>
      {props.loadedSheet.map(x =>
        <Block
          key={x.titlePath.join('.')}
          loadedSheet={props.loadedSheet}
          setLoadedSheet={props.setLoadedSheet}
          titlePath={x.titlePath}
          content={x.content}
        />
      )}
    </ul>
  )
}
