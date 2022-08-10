// Complete the solution
// so that the function will break up camel casing,
// using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// solution
function solution(string) {
  const str = [];
  Array.from(string).forEach((char) => {
    if (char.toUpperCase() === char) {
      str.push(" ");
    }
    str.push(char);
  });
  return str.join("");
}
