function reverseWords(input) {
    let words = [];
    let word = "";
  
    // Loop through each character in the input string
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
  
      if (char !== ' ') {
        word += char; // Build current word
      } else {
        words.push(word); // Push completed word to words array
        word = ""; // Reset word
      }
    }
  
    // Push the last word after loop ends
    if (word.length > 0) {
      words.push(word);
    }
  
    // Reverse the words array manually
    let reversed = "";
    for (let i = words.length - 1; i >= 0; i--) {
      reversed += words[i];
      if (i !== 0) {
        reversed += " ";
      }
    }
  
    return reversed;
  }
  
  // Example usage:
  console.log(reverseWords("hello world")); // Output: "world hello"