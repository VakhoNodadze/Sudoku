import React, { useState } from 'react'
import Board from './Board'
import './index.scss'

const Game = () => {
    const [difficulty, setDifficulty] = useState('Easy')
    return (
        <>
            <Board difficulty={difficulty}/>
        </>
    )
}

export default Game