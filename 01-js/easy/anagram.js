/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  function normalize(str) {
    return str.toLowerCase().split('').sort().join('');
  }
  // to sort in js u should split the objects elements and normally it sorts on lexiographically
  // to sort in acending order of numerical value sort((a,b) => a-b);
  // to sort in descedding order of numberical value sort((a,b)=>b-a);
  //  we can sort based on some property of objects value sort((a,b)=> b.age - a.age));
  const normalized1 = normalize(str1);
  const normalized2 = normalize(str2);

  return normalized1 === normalized2;
}

module.exports = isAnagram;
