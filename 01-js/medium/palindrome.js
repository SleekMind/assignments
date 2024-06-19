/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase to handle case-insensitivity
  str = str.toLowerCase();

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    // Skip non-alphabetic characters
    if (!/[a-z]/.test(str[i])) {
      i++;
      continue;
    }
    if (!/[a-z]/.test(str[j])) {
      j--;
      continue;
    }

    if (str[i] != str[j]) return false; // Mismatch found
    i++;
    j--;
  }

  return true; // String is a palindrome
}

module.exports = isPalindrome;


module.exports = isPalindrome;
