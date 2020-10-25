function randomlyGeneratedValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  const removingEntries = (newGrid, difficulty) => {
    let minToRemove;
    let maxToRemove;
    if (difficulty === 'Easy') {
      minToRemove = 1;
      maxToRemove = 1;
    } else if (difficulty === 'Normal') {
      minToRemove = 5;
      maxToRemove = 7;
    } else if (difficulty === 'Hard') {
      minToRemove = 6;
      maxToRemove = 8;
    } 
  
    for (let row = 0; row < newGrid.length; row += 1) {
      let entriesToRemove = randomlyGeneratedValue(minToRemove, maxToRemove);
      let entriesRemoved = 0;
      let indexEntries = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  
      while (entriesRemoved < entriesToRemove) {
        let entryRemoved = randomlyGeneratedValue(0, indexEntries.length);
        console.log('SPLICIING::', newGrid[row])
        newGrid[row][entryRemoved].value = null
        newGrid[row][entryRemoved].editable = true
        indexEntries.splice(entryRemoved, 1);
        entriesRemoved += 1;
      }
    }
  };
  
  const createGrid = () => {
    let arr = [];
  
    for (let i = 0; i < 9; i++) {
      let innerArr = [];
      for (let j = 0; j < 9; j++) {
        innerArr.push({value: null, editable: true, hasConflict: false });
      }
      arr.push(innerArr);
    }
  
    return arr;
  }
  const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const verifyRow = (grid, row, val = null) => {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col].value === val) {
        // console.log('match:', grid[row][col])
        return false;
      }
    }
    return true;
  }
  
  const verifyCol = (grid, col, val = null) => {
    for (let row = 0; row < 9; row++) {
      if (grid[row][col].value === val) {
        // console.log('match:', grid[row][col])
        return false;
      }
    }
    return true;
  };
  
  const verifyBox = (grid, row, col, val = null) => {
    let startRow = parseInt(row / 3) * 3;
    let startCol = parseInt(col / 3) * 3;
  
    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (grid[r][c].value === val) {
          return false;
        }
      }
    }
    return true;
  };
  const isValid = (grid, row, col, num = null) => {
    if (
      verifyBox(grid, row, col, num) &&
      verifyCol(grid, col, num) && verifyRow(grid, row, num)
    ) {
      return true;
    }
    return false;

  };

  const verifySudoku = grid => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (!isValid(grid, row, col)) {
          return false;
        }
      }
    }
    return true;
  };
  const solve = (grid, shuffled) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col].value === null) {
          shuffled.forEach(choice => {
            if (isValid(grid, row, col, choice)) {
              grid[row][col].value = choice;
              grid[row][col].editable = false;
              solve(grid, shuffled);
              // this is something that I added to stop the recursion when a solution is found otherwise it finds every solution!
              if (!verifySudoku(grid)) {
                grid[row][col].value = null;
              }
            }
          });
          return;
        }
      }
    }
    return grid;
  };

  const checkSubset = (array) => {
    let nums = {};
    for (let i = 0; i < 9; i++) {
      if (array[i].value !== null && nums.hasOwnProperty(array[i].value)) {
        array[i].hasConflict = true;
        array[nums[array[i].value]].hasConflict = true;
      }
      nums[array[i].value] = i;
    }
  }

function checkConflicts(cells) {
    // markAllWithoutConflict(cells);
  
    // check horizontal lines
    for (let i = 0; i < 9; i++) {
      let arr = [];
      for (let j = 0; j < 9; j++) {
        arr.push(cells[i][j]);
      }
      checkSubset(arr);
    }
  
    // check vertical lines
    for (let j = 0; j < 9; j++) {
      let arr = [];
      for (let i = 0; i < 9; i++) {
        arr.push(cells[i][j]);
      }
      checkSubset(arr);
    }
  
    // check squares
    let c = cells;
    checkSubset([c[0][0], c[0][1], c[0][2], c[1][0], c[1][1], c[1][2], c[2][0], c[2][1], c[2][2]]);
    checkSubset([c[3][0], c[3][1], c[3][2], c[4][0], c[4][1], c[4][2], c[5][0], c[5][1], c[5][2]]);
    checkSubset([c[6][0], c[6][1], c[6][2], c[7][0], c[7][1], c[7][2], c[8][0], c[8][1], c[8][2]]);
  
    checkSubset([c[0][3], c[0][4], c[0][5], c[1][3], c[1][4], c[1][5], c[2][3], c[2][4], c[2][5]]);
    checkSubset([c[3][3], c[3][4], c[3][5], c[4][3], c[4][4], c[4][5], c[5][3], c[5][4], c[5][5]]);
    checkSubset([c[6][3], c[6][4], c[6][5], c[7][3], c[7][4], c[7][5], c[8][3], c[8][4], c[8][5]]);
  
    checkSubset([c[0][6], c[0][7], c[0][8], c[1][6], c[1][7], c[1][8], c[2][6], c[2][7], c[2][8]]);
    checkSubset([c[3][6], c[3][7], c[3][8], c[4][6], c[4][7], c[4][8], c[5][6], c[5][7], c[5][8]]);
    checkSubset([c[6][6], c[6][7], c[6][8], c[7][6], c[7][7], c[7][8], c[8][6], c[8][7], c[8][8]]);
  }
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    randomlyGeneratedValue,
    verifyRow,
    verifyCol,
    verifyBox,
    removingEntries,
    createGrid,
    isValid,
    verifySudoku,
    shuffle,
    solve,
    checkConflicts
  };
  