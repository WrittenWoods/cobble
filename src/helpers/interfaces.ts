/*

-A "snippet" in the context of this project is a single discrete named field in a character sheet.
-"Class", "ability scores" etc.
-Snippets can be nested: "Strength" can be a snippet in "ability scores" etc.

*/

// Snippets as they exist in the nested object form of a character sheet

export interface Snippet {
  title: string,
  content: string | string[] | Snippet[]
}

// Snippets as they exist in the one-dimensional object array form of a character sheet

export interface SearchSnippet {
  titlePath: string[],
  content: string | string[]
}
