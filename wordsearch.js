/*
Worked on by Jeremy and Aingaran for Pair Programming Wordsearch.
*/



// function to transpose horizontal array to vertical.
const transpose = function(matrix) {
  let output = [];
  for (let i = 0; i < matrix[0].length; i++) {
    // Create an empty row for each row in the matrix
    output.push([]);
  }

  for (const row in matrix) {
    for (const col in matrix[row]) {
      output[col][row] = matrix[row][col];
    }
  }

  return output;
};

let found = false;

const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    return false;
  }

  // backwards word
  const reversedWord = word.split("").reverse().join("");

  const horizontalJoin = letters.map((hls) => hls.join(""));
  const verticalJoin = vertical.map((vls) => vls.join(""));

  const vertical = transpose(letters);


  joining(verticalJoin, word);
  joining(horizontalJoin, word);
  joining(verticalJoin, reversedWord);
  joining(horizontalJoin, reversedWord);

  return found;
};

const joining = function(array, word) {
  for (let l of array) {
    if (l.includes(word)) {
      found = true;
    }
  }
};

module.exports = wordSearch;