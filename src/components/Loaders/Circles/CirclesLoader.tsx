import React from 'react';
import styles from './circles.module.scss'

export const CirclesLoader = () => {
    return (
        <div className={styles['circles']}>
            <div className={styles['ring']}/>
            <div className={styles['ring']}/>
            <div className={styles['ring']}/>
            <p>Loading ...</p>
        </div>
    );
};
