import { SearchBlock, MenuPanel, StringPanel } from "./interfaces";

// Represents all the state variables and state setter functions in the Sheet component

export type SheetState = [
  SearchBlock[],
  (a:SearchBlock[])=>void,
  (StringPanel | MenuPanel)[],
  (a:(StringPanel | MenuPanel)[])=>void
]
