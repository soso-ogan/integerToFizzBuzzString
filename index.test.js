const { integerToString } = require("./index");

test("Should output a string of numbers from 1 to 'n' separated by a comma where if the number is divisible by 3, the number should be replaced with 'Fizz',", () => {
  expect(integerToString(3)).toStrictEqual("1, 2, Fizz");
});
