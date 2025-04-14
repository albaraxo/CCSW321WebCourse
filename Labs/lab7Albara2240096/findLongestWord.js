function findLongestWord(words) {
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
  }
  
  // Test array
  var words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpott'];
  console.log("Longest word:", findLongestWord(words));
  