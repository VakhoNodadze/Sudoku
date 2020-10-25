import React, { useState, useEffect } from 'react'
import sudokuRules from './Sudoku'
import cloneDeep from 'lodash.clonedeep'
import Cell from './Cell'

const Board = ({difficulty}) => {

    const [ grid, setGrid ] = useState([])

    const generateBoard = () => {
      let gridNewly = sudokuRules.createGrid()
      sudokuRules.solve(gridNewly, sudokuRules.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
      sudokuRules.removingEntries(gridNewly, 'Easy')
      setGrid(gridNewly)
    }

    const handleKeyPress = (key, row, col) => {
        const gridCopy = cloneDeep(grid);
        grid[row][col].value = key
        setGrid(grid)
    }

    useEffect(() => {
        generateBoard()
    }, [])

    return (
        <div className="container">
          <table className="sudoku-table">
            <tbody>
              {grid.map((row, i) => {
                return (
                  <tr key={i}>
                    {row.map(cell => {
                      return <Cell cell={cell} key={cell} />;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    )
}

export default Board