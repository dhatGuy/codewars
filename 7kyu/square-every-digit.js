// Welcome.
// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out,
// because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// SOLUTION
function squareDigits(num) {
  //may the code be with you
  let square = "";
  let arrayNum = num
    .toString()
    .split("")
    .map((n) => {
      square += n ** 2;
    });
  return parseInt(square);
}
