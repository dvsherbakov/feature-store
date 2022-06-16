import React from 'react';
import styles from './centerViewContainer.module.scss'
import {CentralViewContainerProps} from "./types";

const CenterViewContainer = ({background, children}: CentralViewContainerProps) => {
    return (
        <div style={{background}} className={styles['container']}>
            {children}
        </div>
    );
};

export default CenterViewContainer;