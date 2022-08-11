/**
 * Complete the function scramble(str1, str2) that
 * returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
 *
 * Notes:
 * Only lower case letters will be used (a-z). No punctuation or digits will be included.
 * Performance needs to be considered.
 *
 * Examples
 * scramble('rkqodlw', 'world') ==> True
 * scramble('cedewaraaossoqqyt', 'codewars') ==> True
 * scramble('katas', 'steak') ==> False
 */

const scramble = (str1, str2) => {
  const counts = {};
  for (const letter of str1) {
    counts[letter] = (counts[letter] || 0) + 1;
  }

  return str2.split("").every((letter) => {
    if (counts[letter] > 0) {
      counts[letter]--;
      return true;
    } else {
      return false;
    }
  });
};
