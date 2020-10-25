import React from 'react'

const Cell = ({cell}) => {
  
    let classes = [];
    // classes.push('i'+cell.i);
    // classes.push('j'+cell.j);
    classes.push(cell.editable ? 'editable' : 'not-editable');
    classes.push(cell.hasConflict ? 'has-conflict' : 'no-conflict');
    // shouldComponentUpdate(newProps, newState) {
    //   var oldCell = this.props.cell;
    //   var newCell = newProps.cell;
    //   return (
    //     oldCell.value !== newCell.value ||
    //     oldCell.editable !== newCell.editable ||
    //     oldCell.hasConflict !== newCell.hasConflict
    //   );
    // }
      return (
        <td className={classes.join(' ')}>
          <input
            type="tel"
            value={cell.value}
            // onClick={this.onClick}
            onChange={this.onChange} 
            />
        </td>
      );
  
  }

  export default Cell