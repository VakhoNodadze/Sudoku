import React from 'react'
import styled from 'styled-components'

const Cell = ({cell, handleKeyPress, row, col}) => {
  
    const handleChange = (e) => {
      const number = e.key
      if(!cell.editable){
        return
      }
      if (number === 'Backspace' || number === 'Delete') {
        handleKeyPress(null, row, col)
      } else {
        handleKeyPress(number, row, col)
      }
    }

    const renderColor = () => {
      if(cell.hasConflict){
        return 'red'
      }else if(!cell.editable){
        return 'rgba(0,0,0,0.4)'
      }
      return '#000'
    }
    
      return (
        <Container 
        marginRight={(col + 1) % 3}
        marginBottom={(row + 1) % 3}
        >
          <Input
            color={renderColor()}
            conflict={cell.hasConflict}
            value={cell.value === null ? '' : cell.value}
            onKeyDown={handleChange} 
            onChange={() => console.log()}
            />
        </Container>
      )
  
  }

  export default Cell

  const Container = styled.div `
    margin-right: ${props => props.marginRight ? '0' : '1rem'};
    margin-bottom: ${props => props.marginBottom ? '0' : '1rem'};
    font-size: 2.5rem;
    display: inline-block;
    width: 4.25rem;
    height: 4.25rem;
    padding: 2px;
    border-radius: 0.5rem;

    @media (max-width: 968px) {
      width: 3.25rem;
      height: 3.25rem;
    }

    @media (max-width: 568px) {
      width: 2.25rem;
      height: 2.25rem;
    }
  `
  const Input = styled.input `
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.5rem;
    color: ${props => props.color};
    background-color: ${props => props.conflict ? 'rgba(255, 56, 56, 0.05)' : '#fff'};
    border: ${props => props.conflict ? '1px solid #FF3838' : '1px solid #000'};
    border-radius: 0.5rem;
    &:focus {
      outline:none;
    }
  `