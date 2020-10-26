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

    const handleModalShow = () => {
        setModalShow(true)
    }
    const handleModalClose = () => {
        setModalShow(false)
    }
    const handleSolve = () => {
        setSolved(true)
    }

    const renderModal = () => (
        <DifficultyModal 
        isOpen={modalShow} 
        onClose={() => handleModalClose()} 
        difficulty={difficulty} 
        setDifficulty={setDifficulty}
        />
    )

    return (
        <>
            <Board difficulty={difficulty} solved={solved} />
            <div style={{display: 'flex', width: '40%', margin: '3rem auto'}}>
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
                    onClick={() => handleSolve()}>
                    Solve it!
                </Button>
            </div>
            {difficulty && renderModal()}
        </>
    )
}

export default withTheme(Game)