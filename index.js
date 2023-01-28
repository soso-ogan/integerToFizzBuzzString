function integerToString(integer) {
  stringArray = [];
  for (let int = 1; int <= integer; int++) {
    if (isFizzBuzz(int)) {
      stringArray.push("FizzBuzz");
    } else if (isFizz(int)) {
      stringArray.push("Fizz");
    } else if (isBuzz(int)) {
      stringArray.push("Buzz");
    } else {
      stringArray.push(int);
    }
  }
  return stringArray.join(", ");
}

function isFizzBuzz(number) {
  return isFizz(number) && isBuzz(number);
}

function isFizz(number) {
  return number % 3 == 0 ? true : false;
}

function isBuzz(number) {
  return number % 5 == 0 ? true : false;
}

module.exports = { integerToString };
