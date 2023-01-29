const { integerToFizzBuzzString } = require("./index");

test("Should output a string of numbers from 1 to 'n' separated by a comma where if the number is divisible by 3, the number should be replaced with 'Fizz',", () => {
  expect(integerToFizzBuzzString(3)).toStrictEqual("1, 2, Fizz");
});

test("Should output a string of numbers from 1 to 'n' separated by a comma where if the number is divisible by 5, the number should be replaced with 'Buzz',", () => {
  expect(integerToFizzBuzzString(5)).toStrictEqual("1, 2, Fizz, 4, Buzz");
});

test("Should output a string of numbers from 1 to 'n' separated by a comma where if the number is divisible by 3 and 5, the number should be replaced with 'FizzBuzz',", () => {
  expect(integerToFizzBuzzString(15)).toStrictEqual(
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz"
  );
});
