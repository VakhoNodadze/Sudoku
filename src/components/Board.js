import React, { useState, useEffect } from 'react'
import sudokuRules from './Sudoku'
import Button from './primitives/Button'
import cloneDeep from 'lodash.clonedeep'
import Cell from './Cell'

const Board = ({difficulty, solved, newGame, setNewGame, handleUnSolve}) => {

    const [ grid, setGrid ] = useState([])

    const generateBoard = () => {
      let gridNewly = sudokuRules.createGrid()
      sudokuRules.solve(gridNewly, sudokuRules.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
      sudokuRules.removingEntries(gridNewly, difficulty)
      handleUnSolve()
      setNewGame(false)
      setGrid(gridNewly)
    }

    const handleKeyPress = (key, row, col) => {
      const regex = /^[0-9\b]+$/
      const gridCopy = cloneDeep(grid)
      if(key){
        if(regex.test(key) && key > 0){
          gridCopy[row][col].value = Number(key)
        }
      }else{
        gridCopy[row][col].value = key
      }
        setGrid(gridCopy)
        sudokuRules.checkConflicts(gridCopy)
    }

    const handleSolveSudoku = () => {
      const gridCopy = cloneDeep(grid)
      sudokuRules.solve(gridCopy, sudokuRules.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
      setGrid(gridCopy)
    }

    useEffect(() => {
        generateBoard()
    }, [])  

    useEffect(() =>{
      generateBoard()
    }, [difficulty, newGame])

    useEffect(() => {
      if(solved){
        handleSolveSudoku()
      }
    }, [solved])

    return (
      <>
        <div className="container">
          <table className="sudoku-table">
            <tbody>
              {grid.map((row, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => {
                      return <Cell key={`${rowIndex}${colIndex}`} cell={cell} row={rowIndex} col={colIndex} handleKeyPress={handleKeyPress} />;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </>
    )
}

export default Board