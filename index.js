function integerToString(integer) {
  stringArray = [];
  for (let int = 1; int <= integer; int++) {
    if (isFizz(int)) {
      stringArray.push("Fizz");
    } else {
      stringArray.push(int);
    }
  }
  return stringArray.join(", ");
}

function isFizz(number) {
  return number % 3 == 0 ? true : false;
}

function isBuzz(number) {
  return number % 5 == 0 ? true : false;
}

function isFizzBuzz(number) {
  return isFizz(number) && isBuzz(number);
}
module.exports = { integerToString };
