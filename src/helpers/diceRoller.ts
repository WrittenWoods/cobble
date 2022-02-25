export const diceRoller = function parseDiceRollAndReturnResult (str: string) {

  let arr = str.split('')
  let isDieType = false
  let numArr = [], typeArr = []
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "d") {
      isDieType = true
    } else {
    	isDieType ? typeArr.push(arr[i]) : numArr.push(arr[i])
    }
  }

  let dieNumber = Number(numArr.join(''))
  let dieType = Number(typeArr.join(''))
  for (let i = 0; i < dieNumber; i++) { result += Math.ceil(Math.random() * dieType) }

  return result

}
