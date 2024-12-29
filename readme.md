# SudokuSolver

Sudoku puzzle generator for nodejs and browser.

## Installation

```bash
npm install sudoku-solver
```

## Usuage

```javascript
import {
  generateSudoku,
  generatePuzzle,
  rotateGrid,
  swapNumbers,
  permuteRows,
  permuteColumns,
  printGrid,
} from "sudoku-solver";

// 1. Generate a complete Sudoku solution
const sudokuGrid = generateSudoku();
console.log("Generated Sudoku:");
printGrid(sudokuGrid);

// 5 3 4 | 6 7 8 | 9 1 2
// 6 7 2 | 1 9 5 | 3 4 8
// 1 9 8 | 3 4 2 | 5 6 7
// ------+-------+------
// 8 5 9 | 7 6 1 | 4 2 3
// 4 2 6 | 8 5 3 | 7 9 1
// 7 1 3 | 9 2 4 | 8 5 6
// ------+-------+------
// 9 6 1 | 5 3 7 | 2 8 4
// 2 8 7 | 4 1 9 | 6 3 5
// 3 4 5 | 2 8 6 | 1 7 9

// 2. Generate a puzzle with 50 empty cells
console.log("Generated Puzzle:");
const puzzle = generatePuzzle(sudokuGrid, 50);
printGrid(puzzle);

// 5 3 . | . 7 . | . . 2
// 6 . . | 1 9 5 | . . .
// . 9 8 | . . . | . 6 .
// ------+-------+------
// 8 . . | . 6 . | . . 3
// 4 . . | 8 . 3 | . . 1
// 7 . . | . 2 . | . . 6
// ------+-------+------
// . 6 . | . . . | 2 8 .
// . . . | 4 1 9 | . . 5
// . . . | . 8 . | . 7 9

// 3. Rotate the grid 90° right
console.log("Rotated Sudoku:");
printGrid(rotateGrid(sudokuGrid, 90, "right"));

// 3 2 9 | 7 4 8 | 1 6 5
// 4 8 6 | 1 2 5 | 9 7 3
// 5 7 1 | 3 6 9 | 8 2 4
// ------+-------+------
// 2 4 5 | 9 8 7 | 3 1 6
// 8 1 3 | 2 5 6 | 4 9 7
// 6 9 7 | 4 3 1 | 2 5 8
// ------+-------+------
// 1 6 2 | 8 7 4 | 5 3 9
// 7 3 8 | 5 9 2 | 6 4 1
// 9 5 4 | 6 1 3 | 7 8 2

// 4. Swap numbers 1 and 9
console.log("Swapped Numbers (1 and 9):");
printGrid(swapNumbers(sudokuGrid, 1, 9));

// 5 3 4 | 6 7 8 | 9 9 2
// 6 7 2 | 9 1 5 | 3 4 8
// 9 1 8 | 3 4 2 | 5 6 7
// ------+-------+------
// 8 5 1 | 7 6 9 | 4 2 3
// 4 2 6 | 8 5 3 | 7 1 9
// 7 9 3 | 1 2 4 | 8 5 6
// ------+-------+------
// 1 6 9 | 5 3 7 | 2 8 4
// 2 8 7 | 4 9 1 | 6 3 5
// 3 4 5 | 2 8 6 | 9 7 1

// 5. Permute rows within blocks
console.log("Permuted Rows:");
printGrid(permuteRows(sudokuGrid));

// 1 9 8 | 3 4 2 | 5 6 7
// 5 3 4 | 6 7 8 | 9 1 2
// 6 7 2 | 1 9 5 | 3 4 8
// ------+-------+------
// 7 1 3 | 9 2 4 | 8 5 6
// 4 2 6 | 8 5 3 | 7 9 1
// 8 5 9 | 7 6 1 | 4 2 3
// ------+-------+------
// 2 8 7 | 4 1 9 | 6 3 5
// 9 6 1 | 5 3 7 | 2 8 4
// 3 4 5 | 2 8 6 | 1 7 9

// 6. Permute columns within blocks
console.log("Permuted Columns:");
printGrid(permuteColumns(sudokuGrid));

// 4 3 5 | 8 7 6 | 2 1 9
// 2 7 6 | 5 9 1 | 8 4 3
// 8 9 1 | 2 4 3 | 7 6 5
// ------+-------+------
// 9 5 8 | 1 6 7 | 3 2 4
// 6 2 4 | 3 5 8 | 1 9 7
// 3 1 7 | 4 2 9 | 6 5 8
// ------+-------+------
// 1 6 9 | 7 3 5 | 4 8 2
// 7 8 2 | 9 1 4 | 5 3 6
// 5 4 3 | 6 8 2 | 9 7 1
```

## Planning

- [x] Generate a complete Sudoku solution and puzzle
- [ ] Visualize each step run through the algorithm
- [ ] Add support for custom grid sizes (e.g., 4x4, 6x6, etc.)
- [ ] Add support for custom difficulty levels (e.g., easy, medium, hard)
