/*

-A "block" in the context of this project is a single discrete named field in a character sheet.
-"Class", "ability scores" etc.
-NestedBlocks can be nested: "Strength" can be a block in "ability scores" etc.

*/

// NestedBlocks as they exist in the nested object form of a character sheet

export interface NestedBlock {
  title: string,
  content: string | string[] | NestedBlock[]
}

// NestedBlocks as they exist in the one-dimensional object array form of a character sheet

export interface SearchBlock {
  titlePath: string[],
  content: string | string[]
}
