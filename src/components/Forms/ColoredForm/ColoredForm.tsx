import React from 'react';
import styles from './colored.module.scss'

export const ColoredForm = () => {
    return (
        <main className={styles['colored']}>
            <div className={styles['inputBox']}>
                <input type='text' required/>
                <span>First Name</span>
                <i/>
            </div>
            <div className={styles['inputBox']}>
                <input type='text' required/>
                <span>Last Name</span>
                <i/>
            </div>
        </main>
    );
};
