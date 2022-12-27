import React from 'react';
import Square from "./Square";
import styles from './Board.module.css'

function Board ({squares,click}) {
    return (
        <div className={styles.board}>
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} click={() => click(i)}/>
                ))
            }
        </div>
    );
}

export default Board;