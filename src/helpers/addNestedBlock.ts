import { NestedBlock, SearchBlock } from "./interfaces";
import { endOfTitlePath } from "./endOfTitlePath";

// Method for adding a SearchBlock to a nested sheet, or changing its value if it's already there.

export const addNestedBlock = function addSearchBlockToNestedSheetArray
  (block: SearchBlock, arr: any[]) {

  // By default, identifies the NestedBlock argument as a new NestedBlock
  // Changes to false if a NestedBlock with a matching title is found in the array argument.

  let newBlock = true

  // Changes content of existing NestedBlock if present in array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === block.titlePath[0]) {
      newBlock = false
      if (block.titlePath.length === 1) {
        arr[i].content = block.content
      } else {
        arr[i].content = addNestedBlock(
          { titlePath: block.titlePath.slice(1), content: block.content }, arr[i].content
        )
      }
    }
  }

  // Adds new NestedBlock if not present in array

  if (newBlock) {
    if (block.titlePath.length === 1) {
      arr.push({ title: block.titlePath[0], content: block.content })
    } else {
      arr.push( { title: block.titlePath[0], content: addNestedBlock(
        { titlePath: block.titlePath.slice(1), content: block.content }, []
      ) })
    }
  }

  // returns array with changed or added value.

  return arr
}
