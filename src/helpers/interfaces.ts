import { SheetState } from "./types";

/*

-A "block" in the context of this project is a single discrete named field in a character sheet.
-"Class", "ability scores" etc.
-NestedBlocks can be nested: "Strength" can be a block in "ability scores" etc.
-A "crumbTrail" is the breadcrumb trail of titles taken through a nested character sheet to reach content.

*/

// Describes the nested character sheet data structure of save data

export interface NestedSheet {
  sheetData: NestedBlock[]
  stringPanels: StringPanel[]
}

// Blocks as they exist in the nested object form of a character sheet

export interface NestedBlock {
  title: string,
  displayInfo: DisplayInfo,
  content: string | NestedBlock[]
}

// Blocks as they exist in the one-dimensional object array form of a character sheet

export interface SearchBlock {
  crumbTrail: string[],
  content: string
}

// Describes data passed into the LoadedSave state variable in App.tsx

export interface SaveData {
  sheetData: SearchBlock[],
  panelList: ( StringPanel | MenuPanel )[]
}

// Describes a panel, typically a menu
// which uses the location of an entry in a sheet to fetch info from that entry

export interface MenuPanel {
  displayInfo: DisplayInfo,
  panelType: string,
  crumbTrail: string[]
}

// Describes a panel in which info is directly passed into a panel's props as a string

export interface StringPanel {
  displayInfo: DisplayInfo,
  panelType: string,
  blockString: string
}

// Describes the props inherited by Sheet.tsx

export interface SheetProps {
  sheetData: SearchBlock[],
  panelList: ( StringPanel | MenuPanel )[]
}

// Describes the props inherited by Menu.tsx

export interface MenuProps {
  sheetState: SheetState,
  crumbTrail: string[]
}

// Describes the props inherited by MenuItem.tsx

export interface MenuItemProps {
  sheetState: SheetState,
  newCrumbTrail: string[]
}

// Describes whether, how and where a panel is displayed

export interface DisplayInfo {
  displayed: boolean,
  displayType: string,
  position?: { x: number, y: number },
  width?: number,
  height?: number
}

// Describes the props inherited by Panel.tsx

export interface PanelProps {
  sheetState: SheetState,
  panelContent: MenuPanel | StringPanel,
  displayedIndex: number,
}

// Describes the props inherited by ContentBlock.tsx

export interface ContentBlockProps {
  sheetState: SheetState,
  crumbTrail?: string[],
  blockString?: string
}

// Describes the props inherited by ParsedContent.tsx

export interface ContentProps {
  sheetState: SheetState,
  contentAtPath: string
}

// Describes the props inherited by Dropdown.tsx

export interface DropdownProps {
  contentType: string,
  toggleEditMode: (a: boolean)=>void,
  showDropdownMenu: boolean
}

// Passed into SaveMenu.tsx

export interface SaveMenuProps {
  sheet: SearchBlock[],
  displayInfo: DisplayInfo,
  setSheet: (a:SearchBlock[])=>void,
}
