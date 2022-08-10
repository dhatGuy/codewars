/**
 *
 *  Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
 * Examples
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 *
 * Constraints
 * 0 <= input.length <= 100
 */

const validParentheses = (parens) => {
  const validParens = [];
  let isValid = true;

  if (parens == "") return true;

  if (parens.length <= 1 || parens.length % 2 !== 0) {
    return false;
  }

  if ([...parens].every((paren) => paren == "(")) return false;

  for (i = 0; i < [...parens].length; i++) {
    parens[i] == "("
      ? validParens.push("(")
      : validParens.length > 0
      ? validParens.pop()
      : (isValid = false);
  }

  if (validParens.length > 0 && isValid) return false;

  return isValid;
};
