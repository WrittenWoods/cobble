import React from 'react';
import Menu from "./Menu";

export default function Sheet(props) {
  return (
    <div>
      <Menu
        loadedSheet={props.loadedSheet}
        setLoadedSheet={props.setLoadedSheet}
      />
    </div>
  );
}
