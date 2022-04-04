import { SearchBlock, DisplayedPanel } from "./interfaces";

export type AppState = [SearchBlock[], (a:SearchBlock[])=>void]

export type SheetState = [
  SearchBlock[],
  (a:SearchBlock[])=>void,
  DisplayedPanel[],
  (a:DisplayedPanel[])=>void
]
