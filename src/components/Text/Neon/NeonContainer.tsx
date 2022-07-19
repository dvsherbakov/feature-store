import React from 'react';
import styles from './neon.module.scss'
import {TNeonContainerProps} from "./types";

export const NeonContainer = ({text, size = 150}: TNeonContainerProps) => {
    return (
        <div className={styles['textContainer']}>
            <h1 style={{fontSize: size}} className={styles['neon']} data-text={text}>{text}</h1>
            <div className={styles["gradient"]}></div>
            <div className={styles["spotlight"]}></div>
        </div>
    );
};

