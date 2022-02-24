import { checkCharacter, Implication } from "./checkCharacter";
import { diceRoller } from "./diceRoller";

export const parseBracket = function parseBracketStringAndReturnNewString
                                                            (str: string) {

  let imp: Implication = {
    possibleDie: false,
    containsD: false,
    dieString: ``,
    possibleMath: false,
    mathString: ``,
    possibleSnippet: false,
    snippetTitle: ``,
    result: ``
  }

  for (let i = 0; i < str.length; i++) {
    imp = checkCharacter(str.charAt(i), imp)
  }

  if (imp.dieString) {
    imp.dieString.includes("d") ?
      imp.result += diceRoller(imp.dieString) : imp.result += imp.dieString
  }

  return imp.result

}
