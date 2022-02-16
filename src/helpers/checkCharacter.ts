import { diceRoller } from "./diceRoller";
import { evaluate } from "mathjs";
import { charSheet } from "../charSheet";

export interface Implication {
  possibleDie: boolean,
  containsD: boolean,
  dieString: string,
  possibleMath: boolean,
  hasOperator: boolean,
  mathString: string,
  possibleSnippet: boolean,
  snippetString: string,
  result: string
}

export const checkCharacter = function determineImplicationsOfCharacter(char: string, imp: Implication) {

  let newImp = imp;

  function endOfDieString(char: string, containsD: boolean) {
    return containsD ? /[^\d]/.test(char) : /[^\dd]/.test(char)
  }

  if (/\d/.test(char)) { newImp.possibleDie = true }
  if (/d/.test(imp.dieString)) { newImp.containsD = true }
  if (newImp.possibleDie && endOfDieString(char, newImp.containsD)) {
    newImp.possibleDie = false
    newImp.containsD ? newImp.result += diceRoller(newImp.dieString) : newImp.result += newImp.dieString
    newImp.dieString = ''
    newImp.containsD = false
  }
  newImp.possibleDie ? newImp.dieString += char : newImp.result += char

  return newImp

}
