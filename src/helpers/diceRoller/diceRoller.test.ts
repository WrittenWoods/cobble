import { diceRoller, diceStringParser } from './diceRoller';
const isTrue = (input: unknown) => !!input;
describe('diceRoller', () => {
  // it("(is/can/has/does prefix optional) simple and short human-readable description of what's expected", () => {
  // expect contains your function, with some params, e.g. expect(isTrue(false))
  // jest provides some helpers that then can be used to inspect the result, e.g. .toBe(), 
  // });
  
  it("doesn't break reality", () =>{
    expect(isTrue(false)).toBe(false);
    expect(isTrue(true)).toBe(true);
  })

  it('converts dice strings and then rolls the dice', () => {
    expect(diceRoller('1d6')).toBeGreaterThanOrEqual(1);
    expect(diceRoller('1d6')).toBeLessThanOrEqual(6);
    expect(diceRoller('100d100')).toBeGreaterThanOrEqual(1);
    expect(diceRoller('100d100')).toBeLessThanOrEqual(Math.pow(100, 100));
  });
});

describe('diceStringParser', () => {
  it('reads die strings and returns dieCount and dieType', () => {
    expect(diceStringParser('1d6')).toEqual({ dieCount: 1, dieType: 6 });
  });
  // also can do any arbirtrary javascript code, one I tend to use often is forEach of a set of values
  [-1, 1, 100, 1000, 10000, 1e10, Infinity].forEach((num) => {
    it(`parsed ${num}d6 value`, () => {
      expect(diceStringParser(`${num}d6`)).toEqual({
        dieType: 6,
        dieCount: num,
      });
    });
  });
  // also can do any arbirtrary javascript code, one I tend to use often is forEach of a set of values
  [-1, 1, 100, 1000, 10000, 1e10, Infinity].forEach((num) => {
    it.todo(`parsed 1d${num} value`); // it.todo is a useful placeholder that reminds one there's unfinished tests
  });
  it.todo('throws error on invalid values e.g. "ddd", or "acdc"');
});
