import { diceRoller } from "./diceRoller";

export const interpolatedRoll = function returnStringWithDiceRollResults(str: string) {
	let arr = str.split(''), dieString = '', newArr = []
  let possibleDie = false, containsD = false
  function endOfDieString(char: string, containsD: boolean) {
    return containsD ? /[^\d]/.test(char) : /[^\dd]/.test(char)
  }

  for (let i = 0; i < arr.length; i++) {
    if (/\d/.test(arr[i])) { possibleDie = true }
    if (/d/.test(dieString)) { containsD = true }
    if (possibleDie && endOfDieString(arr[i], containsD)) {
      possibleDie = false
      containsD ? newArr.push(diceRoller(dieString)) : newArr.push(dieString)
      dieString = ''
      containsD = false
    }
    possibleDie ? dieString += arr[i] : newArr.push(arr[i])
  }
  if (dieString) {
    dieString.includes("d") ? newArr.push(diceRoller(dieString)) : newArr.push(dieString)
  }
  return newArr.join('')
}
