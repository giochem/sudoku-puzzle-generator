export const generateSudoku = () => {
  const grid = Array(9)
    .fill()
    .map(() => Array(9).fill("."));
  fillDiagonalBoxes(grid);
  solveSudoku(grid);
  return grid;
};

export const generatePuzzle = (fullGrid, difficulty = 40) => {
  if (fullGrid === null) {
    fullGrid = generateSudoku();
  }
  return removeNumbers(structuredClone(fullGrid), difficulty);
};

function fillDiagonalBoxes(grid) {
  for (let box = 0; box < 9; box += 3) {
    fillBox(grid, box, box);
  }
}

function fillBox(grid, row, col) {
  const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let currentNum = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid[row + i][col + j] = numbers[currentNum];
      currentNum++;
    }
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function solveSudoku(grid) {
  const emptyCell = findEmptyCell(grid);
  if (!emptyCell) return true;

  const [row, col] = emptyCell;
  const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (const num of numbers) {
    if (isValid(grid, row, col, num)) {
      grid[row][col] = num;
      if (solveSudoku(grid)) return true;
      grid[row][col] = ".";
    }
  }
  return false;
}

function findEmptyCell(grid) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === ".") return [i, j];
    }
  }
  return null;
}

function isValid(grid, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num) return false;
  }

  for (let x = 0; x < 9; x++) {
    if (grid[x][col] === num) return false;
  }

  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i + startRow][j + startCol] === num) return false;
    }
  }

  return true;
}

function removeNumbers(grid, difficulty) {
  let count = 0;
  while (count < difficulty) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (grid[row][col] !== ".") {
      grid[row][col] = ".";
      count++;
    }
  }
  return grid;
}
