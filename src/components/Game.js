import React, { useState } from 'react'
import Board from './Board'
import DifficultyModal from './DifficultyModal'
import './index.scss'

const Game = () => {
    const [difficulty, setDifficulty] = useState('Easy')
    const [modalShow, setModalShow] = useState(false)

    const handleModalShow = () => {
        setModalShow(true)
    }
    const handleModalClose = () => {
        setModalShow(false)
    }

    const renderModal = () => (
        <DifficultyModal isOpen={modalShow} onClose={() => handleModalClose()} difficulty={difficulty} />
    )

    return (
        <>
            <Board difficulty={difficulty}/>
            <button onClick={() => handleModalShow()}>DifficultyModal</button>
            {difficulty && renderModal()}
        </>
    )
}

export default Game