export const printGrid = (grid) => {
  for (let i = 0; i < 9; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log("------+-------+------");
    }
    let row = "";
    for (let j = 0; j < 9; j++) {
      if (j % 3 === 0 && j !== 0) {
        row += "| ";
      }
      row += grid[i][j] + " ";
    }
    console.log(row);
  }
}
