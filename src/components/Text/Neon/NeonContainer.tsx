import React from 'react';
import styles from './neon.module.scss'

export const NeonContainer = () => {
    return (
        <div className={styles['textContainer']}>
            <h1 className={styles['neon']} data-text={'Neon'}>Neon</h1>
            <div className={styles["gradient"]}></div>
            <div className={styles["spotlight"]}></div>
        </div>
    );
};
