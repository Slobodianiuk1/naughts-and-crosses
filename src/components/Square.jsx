import React from 'react';
import styles from './Square.module.css'
function Square ({value, click}) {
    return (
        <button className={styles.square} onClick={click}>{value}</button>
    );
}

export default Square;