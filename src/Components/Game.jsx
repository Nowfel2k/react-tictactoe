import React, {useState} from 'react';
import Board from './Board';
import { checkWinner } from '../helpers';

const styles = {
    width: '200px',
    margin: '20px auto',


}

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = checkWinner(board)


    const handleClick = i => {
        const boardcpy = [...board]

        console.log(i + " is clicked\n")

        if (winner || boardcpy[i]) return
        
        boardcpy[i] = xIsNext ? 'X' : 'O'

        setBoard(boardcpy)
        setXisNext(!xIsNext)
    }

    const renderMoves = () => 
        ( <button onClick = {() => setBoard(Array(9).fill(null))}>
            START THE GAME
        </button> )
    

    return (
        <div>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner is : ' + winner : 'Next player turn : ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </div>
        
    )
}


export default Game;