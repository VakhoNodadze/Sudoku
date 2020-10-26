import React, { useState } from 'react'
import Board from './Board'
import DifficultyModal from './DifficultyModal'
import  { withTheme } from 'styled-components'
import Button from './primitives/Button'
import './index.scss'

const Game = ({theme}) => {
    const [difficulty, setDifficulty] = useState('Easy')
    const [modalShow, setModalShow] = useState(false)
    const [solved, setSolved] = useState(false)
    const [newGame, setNewGame] = useState(false)

    const handleModalShow = () => {
        setModalShow(true)
    }

    const handleModalClose = () => {
        setModalShow(false)
    }

    const handleSolve = () => {
        setSolved(true)
    }

    const handleUnSolve = () => {
        setSolved(false)
    }

    const handleNewGame = () => {
        setNewGame(true)
    }
    
    const handleDifficulty = (diff) => {
        setDifficulty(diff)
        setNewGame(true)
    }

    const renderModal = () => (
        <DifficultyModal 
        isOpen={modalShow} 
        onClose={() => handleModalClose()} 
        difficulty={difficulty} 
        handleDifficulty={handleDifficulty}
        />
    )

    return (
        <>
            <Board difficulty={difficulty} setNewGame={setNewGame} solved={solved} newGame={newGame} handleUnSolve={() => handleUnSolve()} />
            <div style={{display: 'flex', width: '50%', margin: '3rem auto'}}>
                <Button 
                    variant="primary" 
                    color="primary" 
                    fontSize={theme.fontSize.big}
                    fluid 
                    circular 
                    onClick={() => handleModalShow()}>
                    Change Difficulty
                </Button>
                <Button 
                    variant="primary" 
                    color="primary" 
                    fontSize={theme.fontSize.big}
                    fluid 
                    circular 
                    onClick={() => handleNewGame()}>
                    Create New Puzzle
                </Button>
                <Button 
                    variant="primary" 
                    color="primary" 
                    fontSize={theme.fontSize.big}
                    fluid 
                    circular 
                    onClick={() => handleSolve()}>
                    Solve it!
                </Button>
            </div>
            {difficulty && renderModal()}
        </>
    )
}

export default withTheme(Game)