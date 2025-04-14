function Searchingstrings(text, searchValue, startIndex) {
    console.log("Text:", text);
    console.log("Search for:", searchValue);
  
    console.log("First occurrence:", text.indexOf(searchValue));
    console.log("Last occurrence:", text.lastIndexOf(searchValue));
    console.log("First from index", startIndex + ":", text.indexOf(searchValue, startIndex));
    console.log("Last from index", startIndex + ":", text.lastIndexOf(searchValue, startIndex));
  }
  
  var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";
  Searchingstrings(letters, "a", 10);
  