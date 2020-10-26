function randomlyGeneratedValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }
  // After solving the puzzle, remove the elements dependent on what mode is on.
  const removingEntries = (newGrid, difficulty) => {
    let minToRemove
    let maxToRemove
    if (difficulty === 'Easy') {
      minToRemove = 4
      maxToRemove = 6
    } else if (difficulty === 'Normal') {
      minToRemove = 5
      maxToRemove = 7
    } else if (difficulty === 'Hard') {
      minToRemove = 6
      maxToRemove = 8
    } 
  
      // Random number between max number and min number of values that needs to be delete
      for(let subgridY = 0; subgridY < 3; subgridY ++){
        for(let subgridX = 0; subgridX < 3; subgridX++){
          let entriesToRemove = randomlyGeneratedValue(minToRemove, maxToRemove)
          let randArray = []
          // Insuring that we get unique values in the array
          while(randArray.length < entriesToRemove){
            let rNum = randomlyGeneratedValue(0,8)
            if(randArray.indexOf(rNum) === -1) randArray.push(rNum)
          }
          for(let i = 0; i < randArray.length; i++){
            console.log('num', randArray[i])
            let r = subgridY*3+Math.floor(randArray[i]/3)
            let c = subgridX*3+randArray[i]%3
            newGrid[r][c].value = null // Making the value null
            newGrid[r][c].editable = true // Making the editable true so the user can fill in
          }
        }
      }

    // for(let row = 0; row < 9; row+=3){
    //   for(let col = 0; col < 9; col+=3){
    //     while(entriesToRemove > 0){
    //       let startRow = parseInt(row / 3) * 3
    //       let startCol = parseInt(col / 3) * 3
    //       let delRow = randomlyGeneratedValue(startRow, startRow + 3) 
    //       let delCol = randomlyGeneratedValue(startCol, startCol + 3) 
    //       if(newGrid[delRow][delCol].value !== null){
    //         newGrid[delRow][delCol].value = null
    //         newGrid[delRow][delCol].editable = true
    //         console.log(delRow, ' ',delCol)
    //         entriesToRemove--
    //       }
    //     } 
    //   }
    // }
  }
  
  // Create grid with objects that have value of null are all editable and no conflicts each
  const createGrid = () => {
    let arr = []
  
    for (let i = 0; i < 9; i++) {
      let innerArr = []
      for (let j = 0; j < 9; j++) {
        innerArr.push({value: null, editable: true, hasConflict: false })
      }
      arr.push(innerArr)
    }
  
    return arr
  }

  const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  // Verify that there are no duplicates in the row
  const verifyRow = (grid, row, val = null) => {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col].value === val) {
        return false;
      }
    }
    return true;
  }
  
  // Verify that there are no duplicates in the column
  const verifyCol = (grid, col, val = null) => {
    for (let row = 0; row < 9; row++) {
      if (grid[row][col].value === val) {
        // console.log('match:', grid[row][col])
        return false
      }
    }
    return true
  }
  
  // Verify that there are no duplicates in each sub grid
  const verifyBox = (grid, row, col, val = null) => {
    let startRow = parseInt(row / 3) * 3
    let startCol = parseInt(col / 3) * 3
  
    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (grid[r][c].value === val) {
          return false
        }
      }
    }
    return true
  }

  const isValid = (grid, row, col, num = null) => {
    if (verifyBox(grid, row, col, num) &&verifyCol(grid, col, num) && verifyRow(grid, row, num)) {
      return true
    }
    return false
  }

  const verifySudoku = grid => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (!isValid(grid, row, col)) {
          return false
        }
      }
    }
    return true
  }
  function markAllWithoutConflict(matrix) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        matrix[i][j].hasConflict = false
      }
    }
  }
  const solve = (grid, shuffled) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col].value === null) {
          shuffled.forEach(choice => {
            if (isValid(grid, row, col, choice)) {
              grid[row][col].value = choice;
              grid[row][col].editable = false
              solve(grid, shuffled);
              if (!verifySudoku(grid)) {
                grid[row][col].value = null
              }
            }
          });
          return
        }
      }
    }
    return grid
  }

  // Check if game is complete. No cell is with coflicts and with null value. if so, than make everything not editable
  function isComplete(matrix) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let cell = matrix[i][j];
        if (cell.hasConflict || cell.value === null) {
          return false;
        }
      }
    }
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        matrix[i][j].editable = false
      }
    }
    return true;
  }

  const checkSubset = (array) => {
    let nums = {}
    for (let i = 0; i < 9; i++) {
      if (array[i].value !== null && nums.hasOwnProperty(array[i].value)) {
        array[i].hasConflict = true;
        array[nums[array[i].value]].hasConflict = true
      }
      nums[array[i].value] = i
    }
  }

  // Check for conflicts in every cell in horizontal line, vertical and in the boxes. If found duplicates, make their conflicts true
function checkConflicts(matrix) {
    markAllWithoutConflict(matrix);
  
    // check horizontal lines
    for (let i = 0; i < 9; i++) {
      let arr = [];
      for (let j = 0; j < 9; j++) {
        arr.push(matrix[i][j])
      }
      checkSubset(arr)
    }
  
    // check vertical lines
    for (let j = 0; j < 9; j++) {
      let arr = [];
      for (let i = 0; i < 9; i++) {
        arr.push(matrix[i][j])
      }
      checkSubset(arr)
    }
  
    // check squares
    let c = matrix;
    checkSubset([c[0][0], c[0][1], c[0][2], c[1][0], c[1][1], c[1][2], c[2][0], c[2][1], c[2][2]])
    checkSubset([c[3][0], c[3][1], c[3][2], c[4][0], c[4][1], c[4][2], c[5][0], c[5][1], c[5][2]])
    checkSubset([c[6][0], c[6][1], c[6][2], c[7][0], c[7][1], c[7][2], c[8][0], c[8][1], c[8][2]])
  
    checkSubset([c[0][3], c[0][4], c[0][5], c[1][3], c[1][4], c[1][5], c[2][3], c[2][4], c[2][5]])
    checkSubset([c[3][3], c[3][4], c[3][5], c[4][3], c[4][4], c[4][5], c[5][3], c[5][4], c[5][5]])
    checkSubset([c[6][3], c[6][4], c[6][5], c[7][3], c[7][4], c[7][5], c[8][3], c[8][4], c[8][5]])
  
    checkSubset([c[0][6], c[0][7], c[0][8], c[1][6], c[1][7], c[1][8], c[2][6], c[2][7], c[2][8]])
    checkSubset([c[3][6], c[3][7], c[3][8], c[4][6], c[4][7], c[4][8], c[5][6], c[5][7], c[5][8]])
    checkSubset([c[6][6], c[6][7], c[6][8], c[7][6], c[7][7], c[7][8], c[8][6], c[8][7], c[8][8]])
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
    checkConflicts,
    isComplete
  };
  