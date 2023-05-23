type ParsedDieResult = {
  dieType: number;
  dieCount: number;
};
/**
 * Reads a die string and parses into dieType and dieCount
 * @param str a string which represents dice in the form of `number`d`number`
 * @returns {dieType:number; dieCount:number}
 */
export const diceStringParser = (str: string): ParsedDieResult => {
  let isDieType = false;
  const arr = str.split('');
  const numArr = [],
    typeArr = [];

  // Iterates over array of characters to determine where number of dice ends and type of dice begins.

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'd') {
      isDieType = true;
    } else {
      isDieType ? typeArr.push(arr[i]) : numArr.push(arr[i]);
    }
  }

  const dieCount = Number(numArr.join(''));
  const dieType = Number(typeArr.join(''));
  return { dieCount, dieType };
};

// Accepts: A string of the form "1d6", "32d12" etc.
// Returns: A dice roll result.
export const diceRoller = function parseDiceRollAndReturnResult(
  str: string
): number {
  const { dieCount, dieType } = diceStringParser(str);
  // Rolls each die and adds to result.
  let result = 0;

  for (let i = 0; i < dieCount; i++) {
    result += Math.ceil(Math.random() * dieType);
  }

  return result;
};
