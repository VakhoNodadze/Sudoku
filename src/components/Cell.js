import React from 'react'

const Cell = ({cell, handleKeyPress, row, col}) => {
  
    let classes = []
    console.log(typeof col)
    classes.push(col === 0 ? 'border-left' : '')
    classes.push(row === 0 ? 'border-top' : '')
    classes.push((col+1) % 3=== 0 ? 'border-right' : '')
    classes.push((row+1) % 3=== 0 ? 'border-bottom' : '')
    classes.push(cell.editable ? 'editable' : 'not-editable')
    classes.push(cell.hasConflict ? 'has-conflict' : 'no-conflict')
    const handleChange = (e) => {
      const number = e.key;
      if(!cell.editable){
        return
      }
      if (number === 'Backspace' || number === 'Delete') {
        handleKeyPress(null, row, col);
      } else {
        handleKeyPress(number, row, col);
      }
    }
      return (
        <td className={classes.join(' ')}>
          <input
            type="tel"
            value={cell.value === null ? '' : cell.value}
            onKeyDown={handleChange} 
            onChange={() => console.log('handler')}
            />
        </td>
      );
  
  }

  export default Cell