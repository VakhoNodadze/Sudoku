import React from 'react'

const Cell = ({cell, handleKeyPress, row, col}) => {
  
    let classes = [];
    classes.push(cell.editable ? 'editable' : 'not-editable');
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