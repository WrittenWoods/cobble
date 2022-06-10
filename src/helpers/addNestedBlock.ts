import { NestedBlock, SearchBlock } from "./interfaces";
import { endOfCrumbTrail } from "./endOfCrumbTrail";

// Accepts: 1) A single entry in a one dimensional sheel and 2) a nested character sheet
// Returns: The nested character sheet argument with an entry either added or updated

export const addNestedBlock = function addSearchBlockToNestedSheetArray
  (block: SearchBlock, arr: any[]) {

  // By default, identifies the NestedBlock argument as a new NestedBlock
  // Changes to false if a NestedBlock with a matching title is found in the array argument.

  let newBlock = true

  // Changes content of existing NestedBlock if present in array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === block.crumbTrail[0]) {
      newBlock = false
      if (block.crumbTrail.length === 1) {
        arr[i].content = block.content
      } else {
        arr[i].content = addNestedBlock(
          { crumbTrail: block.crumbTrail.slice(1), content: block.content }, arr[i].content
        )
      }
    }
  }

  // Adds new NestedBlock if not present in array

  if (newBlock) {
    if (block.crumbTrail.length === 1) {
      arr.push({ title: block.crumbTrail[0], content: block.content })
    } else {
      arr.push( { title: block.crumbTrail[0], content: addNestedBlock(
        { crumbTrail: block.crumbTrail.slice(1), content: block.content }, []
      ) })
    }
  }

  // returns array with changed or added value.

  return arr
}
