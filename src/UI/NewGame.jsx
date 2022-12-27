import React from 'react';
import styles from './NewGame.module.css'

function NewGame ({click}) {
    return (
        <button className={styles.new__game} onClick={() => click()}>NEW GAME</button>
    );
}

export default NewGame;