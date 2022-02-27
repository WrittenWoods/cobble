
// Function that accepts a string of the form "1d6", "32d12" etc. and returns a dice roll result.

export const diceRoller = function parseDiceRollAndReturnResult (str: string): number {

  let arr = str.split('')
  let isDieType = false
  let numArr = [], typeArr = []
  let result = 0

  // Iterates over array of characters to determine where number of dice ends and type of dice begins.

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "d") {
      isDieType = true
    } else {
    	isDieType ? typeArr.push(arr[i]) : numArr.push(arr[i])
    }
  }

  let dieNumber = Number(numArr.join(''))
  let dieType = Number(typeArr.join(''))

  // Rolls each die and adds to result.

  for (let i = 0; i < dieNumber; i++) { result += Math.ceil(Math.random() * dieType) }

  return result

}
