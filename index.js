function integerToFizzBuzzString(integer) {
  outputArray = [];
  for (let int = 1; int <= integer; int++) {
    if (isFizzBuzz(int)) {
      outputArray.push("FizzBuzz");
    } else if (isFizz(int)) {
      outputArray.push("Fizz");
    } else if (isBuzz(int)) {
      outputArray.push("Buzz");
    } else {
      outputArray.push(int);
    }
  }
  return outputArray.join(", ");
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

console.log(`"${integerToFizzBuzzString(3)}"`);
console.log(`"${integerToFizzBuzzString(5)}"`);
console.log(`"${integerToFizzBuzzString(15)}"`);

module.exports = { integerToFizzBuzzString };
