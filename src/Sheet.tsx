import React from 'react';
import Page from "./Page";

export default function Sheet(props) {
  return (
    <div>
      <Page
        loadedSheet={props.loadedSheet}
        setLoadedSheet={props.setLoadedSheet}
      />
    </div>
  );
}
