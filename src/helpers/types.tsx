import { SearchBlock, MenuPanel, ContentPanel } from "./interfaces";

export type AppState = [SearchBlock[], (a:SearchBlock[])=>void]

export type SheetState = [
  SearchBlock[],
  (a:SearchBlock[])=>void,
  (ContentPanel | MenuPanel)[],
  (a:(ContentPanel | MenuPanel)[])=>void
]
