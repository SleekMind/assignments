/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0; // Initialize the counter
    const vowels = 'aeiouAEIOU'; // Define the vowels

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++; // Increment the counter if the character is a vowel
        }
    }

    return count; // Return the final count
}

module.exports = countVowels;
