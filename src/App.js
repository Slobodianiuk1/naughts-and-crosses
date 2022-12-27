import './App.css';
import Board from "./components/Board";
import calculateWinner from "./calculateWinner";
import {useState} from "react";
import NewGame from "./UI/NewGame";


function App () {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [playNext, setPlayNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index] ) return
        boardCopy[index] = playNext ? 'X' : 'O'

        setBoard(boardCopy)
        setPlayNext(!playNext)
    }

    const handleNewGameClick = () => {
        setBoard(Array(9).fill(null))
        setPlayNext( true)
    }



    return (
        <div className="App">
            <div className="">
                <p> {winner ? 'Victory - ' + winner : 'Now turn - ' + (playNext ? 'X' : 'O')}</p>
            </div>
            <Board squares={board} click={handleClick}/>
            <NewGame click={handleNewGameClick}/>
        </div>
    );
}

export default App;
