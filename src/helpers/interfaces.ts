export interface Snippet {
  title: string,
  content: string | string[] | Snippet[]
}

export interface SearchSnippet {
  titlePath: string[],
  content: string | string[]
}
