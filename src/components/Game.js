import React, { useState } from 'react'
import Board from './Board'
import DifficultyModal from './DifficultyModal'
import  styled, { withTheme } from 'styled-components'
import Button from './primitives/Button'
import Lanars from './primitives/Icon/Lanars'

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
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Container>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Lanars />
                        <p style={{color: '#323838', writingMode: 'vertical-rl', textOrientation: 'mixed', fontSize: '6rem', marginTop: '1rem'}}>SUDOKU</p>
                    </div>
                </Container>
                <div>
                    <Board difficulty={difficulty} setNewGame={setNewGame} solved={solved} newGame={newGame} handleUnSolve={() => handleUnSolve()} />
                    <div style={{display: 'flex', margin: '3rem auto'}}>
                        <Button 
                            style={{margin: '0 5px'}}
                            variant="primary" 
                            color="primary" 
                            fontSize={theme.fontSize.big}
                            fluid 
                            circular 
                            onClick={() => handleModalShow()}>
                            Change Difficulty
                        </Button>
                        <Button 
                            style={{margin: '0 5px'}}
                            variant="primary" 
                            color="primary" 
                            fontSize={theme.fontSize.big}
                            fluid 
                            circular 
                            onClick={() => handleNewGame()}>
                            Create New Puzzle
                        </Button>
                    </div>
                </div>
                {difficulty && renderModal()}
            </div>
        </>
    )
}

export default withTheme(Game)

const Container = styled.div `
    @media (max-width: 875px){
        display: none;
    }
`