/**
 * Write a function that takes a string of braces, 
 * and determines if the order of the braces is valid. 
 * It should return true if the string is valid, and false if it's invalid.
 * This Kata is similar to the Valid Parentheses Kata, 
 * but introduces new characters: brackets [], and curly braces {}. 
 * Thanks to @arnedag for the idea!
 * 
 * All input strings will be nonempty, and will only consist of parentheses,
 * brackets and curly braces: ()[]{}.
 * 
 * What is considered Valid?
 * A string of braces is considered valid if all braces are matched with the correct brace.
 * 
 * Examples
 * "(){}[]"   =>  True
 * "([{}])"   =>  True
 * "(}"       =>  False
 * "[(])"     =>  False
 * "[({})](]" =>  False

 */

function validBraces(braces) {
  let stack = [];
  let openBraces = ["{", "[", "("];

  for (i = 0; i < braces.length; i++) {
    let last = stack.length - 1;
    if (openBraces.includes(braces[i])) {
      stack.push(braces[i]);
    } else if (braces[i] == ")" && stack[last] == "(" && stack.length !== 0) {
      stack.pop();
    } else if (braces[i] == "]" && stack[last] == "[" && stack.length !== 0) {
      stack.pop();
    } else if (braces[i] == "}" && stack[last] == "{" && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length == 0;
}
