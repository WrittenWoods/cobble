import { SheetState } from "./types";

/*

-A "block" in the context of this project is a single discrete named field in a character sheet.
-"Class", "ability scores" etc.
-NestedBlocks can be nested: "Strength" can be a block in "ability scores" etc.

*/

// Blocks as they exist in the nested object form of a character sheet

export interface NestedBlock {
  title: string,
  display: string,
  content: string | NestedBlock[]
}

// Blocks as they exist in the one-dimensional object array form of a character sheet

export interface SearchBlock {
  titlePath: string[],
  content: string
}

export interface MenuPanel {
  panelType: string,
  titlePath: string[]
}

export interface ContentPanel {
  panelType: string,
  blockString: string
}

export interface SheetProps {
  sheet: SearchBlock[],
  setSheet: (a:SearchBlock[])=>void
}

export interface MenuProps {
  sheetState: SheetState,
  titlePath: string[]
}

export interface MenuItemProps {
  sheetState: SheetState,
  newTitlePath: string[]
}

export interface PanelProps {
  sheetState: SheetState,
  panelContent: MenuPanel | ContentPanel
}

export interface ContentBlockProps {
  sheetState: SheetState,
  titlePath?: string[],
  blockString?: string
}

export interface ContentProps {
  sheetState: SheetState,
  contentAtPath: string
}

export interface DropdownProps {
  contentType: string,
  toggleEditMode: (a: boolean)=>void,
  showDropdownMenu: boolean
}

export interface SaveMenuProps {
  sheet: SearchBlock[],
  setSheet: (a:SearchBlock[])=>void,
}
