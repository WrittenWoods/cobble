import React from 'react';
import Page from "./Page";

export default function Sheet(props) {
  const [page, setPage] = useState(1)
  return (
    <ul>
      {props.sheetData.map(x => <Page pageNumber={props.starterSheetData[0]} />)}
    </ul>
  );
}
