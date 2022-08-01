let str = ";";
console.log(str.charCodeAt());

let arr1 = [1, 2, 3, 4];
console.log(arr1.indexOf(1));

console.log("5^3 : " + 5 ** 3);

//* Given two strings, write a function to determine if the second string is an anagram of the first.
//* An anagram is a word,phrase, or name formed by rearraging the letters of another,
//* such as cinema, formed from iceman.

//* Frequence Counter Pattern

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //* if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //* can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("anagrams", "nagaramm"));
