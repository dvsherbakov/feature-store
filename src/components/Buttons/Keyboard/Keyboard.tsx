import React from 'react';
import styles from './keyboard.module.scss'

const Keyboard = () => {
    return (
        <div className={styles['keyboard']}>
            <span><i>C</i></span>
            <span><i>S</i></span>
            <span><i>S</i></span>
        </div>
    );
};

export default Keyboard;