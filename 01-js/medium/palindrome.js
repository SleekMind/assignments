function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  str = str.toLowerCase();
  
  let lo = 0;
  let hi = str.length - 1;

  while (lo < hi) {
    // Skip spaces and other non-alphanumeric characters
    while (lo < hi && !isAlphaNumeric(str[lo])) lo++;
    while (lo < hi && !isAlphaNumeric(str[hi])) hi--;
    
    // Compare the characters
    if (str[lo] !== str[hi]) return false;
    
    // Move towards the middle
    lo++;
    hi--;
  }
  
  return true;
}

// Helper function to check if a character is alphanumeric
function isAlphaNumeric(char) {
  return char >= 'a' && char <= 'z' || char >= '0' && char <= '9';
}

module.exports = isPalindrome;
