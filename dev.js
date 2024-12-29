import {
  generateSudoku,
  generatePuzzle,
  rotateGrid,
  swapNumbers,
  permuteRows,
  permuteColumns,
  printGrid,
} from "./src/sudoku.js";

const sudokuGrid = generateSudoku();

console.log("Generated Sudoku:");
printGrid(sudokuGrid);

console.log("Rotated Sudoku:");
printGrid(rotateGrid(sudokuGrid));
console.log("Swapped Sudoku:");
printGrid(swapNumbers(sudokuGrid, 1, 9));

console.log("Permuted Rows Sudoku:");
printGrid(permuteRows(sudokuGrid));
console.log("Permuted Columns Sudoku:");
printGrid(permuteColumns(sudokuGrid));

console.log("Generated Puzzle:");
const puzzle = generatePuzzle(null, 50);
printGrid(puzzle);
