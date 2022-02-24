import { diceRoller } from "./diceRoller";
import { evaluate } from "mathjs";
import { charSheet } from "../charSheet";

// Object type to represent information gathered while iterating through the string argument of parseBracket.ts

export interface Implication {
  possibleDie: boolean,
  containsD: boolean,
  dieString: string,
  possibleMath: boolean,
  mathString: string,
  possibleSnippet: boolean,
  snippetTitle: string,
  result: string
}

// Parses string to identify, and replace with values corresponding to:
// -text that matches snippet titles in character sheet
// -dice rolls
// -mathematical operations (that may or may not include dice rolls)

export const checkCharacter = function determineImplicationsOfCharacter
                                        (char: string, imp: Implication) {

  let { possibleDie, containsD, dieString, possibleMath, mathString,
    possibleSnippet, snippetTitle, result } = imp;

  function endOfDieString(char: string, containsD: boolean) {
    return containsD ? /[^\d]/.test(char) : /[^\dd]/.test(char)
  }

  if (/\d/.test(char)) { possibleDie = true }
  if (/d/.test(imp.dieString)) { containsD = true }
  if (possibleDie && endOfDieString(char, containsD)) {
    possibleDie = false
    containsD ? result += diceRoller(dieString) : result += dieString
    dieString = ''
    containsD = false
  }
  possibleDie ? dieString += char : result += char

  return { possibleDie, containsD, dieString, possibleMath, mathString,
    possibleSnippet, snippetTitle, result }

}
