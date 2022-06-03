import { SearchBlock, MenuPanel, StringPanel } from "./interfaces";

export type AppState = [SearchBlock[], (a:SearchBlock[])=>void]

export type SheetState = [
  SearchBlock[],
  (a:SearchBlock[])=>void,
  (StringPanel | MenuPanel)[],
  (a:(StringPanel | MenuPanel)[])=>void
]
