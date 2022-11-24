const transpose = function(matrix) {
  let output = [];
  for (let i = 0; i < matrix[0].length; i++) {
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

  const reversedWord = word.split("").reverse().join("");

  const horizontalJoin = letters.map((hls) => hls.join(""));

  const vertical = transpose(letters);

  const verticalJoin = vertical.map((vls)=> vls.join(""));
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


