import React from 'react';
import Block from "./Block";

export default function Menu(props) {
  return (
    <div>
      {props.loadedSheet.map(x =>
        <Block
          key={x.titlePath.join('.')}
          loadedSheet={props.loadedSheet}
          setLoadedSheet={props.setLoadedSheet}
          titlePath={x.titlePath}
          content={x.content}
        />
      )}
    </div>
  )
}
