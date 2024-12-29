export const rotateGrid = (grid, degrees = 90, direction = "right") => {
  const newGrid = Array(9)
    .fill()
    .map(() => Array(9).fill("."));

  // Normalize degrees to 0, 90, 180, or 270
  degrees = ((degrees % 360) + 360) % 360;

  // Reverse direction for left rotations
  if (direction === "left") {
    degrees = (360 - degrees) % 360;
  }

  switch (degrees) {
    case 0:
      return structuredClone(grid);

    case 90:
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          newGrid[j][8 - i] = grid[i][j];
        }
      }
      break;

    case 180:
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          newGrid[8 - i][8 - j] = grid[i][j];
        }
      }
      break;

    case 270:
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          newGrid[8 - j][i] = grid[i][j];
        }
      }
      break;
  }

  return newGrid;
};

export const swapNumbers = (grid, num1, num2) => {
  const newGrid = structuredClone(grid);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (newGrid[i][j] === num1) {
        newGrid[i][j] = num2;
      } else if (newGrid[i][j] === num2) {
        newGrid[i][j] = num1;
      }
    }
  }
  return newGrid;
};

export const permuteRows = (grid) => {
  const newGrid = structuredClone(grid);

  // We have 3 blocks of rows (0-2, 3-5, 6-8)
  const blocks = [
    [0, 1, 2], // First block
    [3, 4, 5], // Middle block
    [6, 7, 8], // Last block
  ];

  // For each block, swap two random rows
  blocks.forEach((block) => {
    // Pick two random positions in the block
    const pos1 = Math.floor(Math.random() * 3);
    const pos2 = Math.floor(Math.random() * 3);

    // Get the actual row numbers
    const row1 = block[pos1];
    const row2 = block[pos2];

    // Swap the rows
    [newGrid[row1], newGrid[row2]] = [newGrid[row2], newGrid[row1]];
  });

  return newGrid;
};

export const permuteColumns = (grid) => {
  const newGrid = structuredClone(grid);

  // We have 3 blocks of columns (0-2, 3-5, 6-8)
  const blocks = [
    [0, 1, 2], // First block
    [3, 4, 5], // Middle block
    [6, 7, 8], // Last block
  ];

  // For each block, swap two random columns
  blocks.forEach((block) => {
    // Pick two random positions in the block
    const pos1 = Math.floor(Math.random() * 3);
    const pos2 = Math.floor(Math.random() * 3);

    // Get the actual column numbers
    const col1 = block[pos1];
    const col2 = block[pos2];

    // Swap the columns
    for (let row = 0; row < 9; row++) {
      [newGrid[row][col1], newGrid[row][col2]] = [
        newGrid[row][col2],
        newGrid[row][col1],
      ];
    }
  });

  return newGrid;
};
