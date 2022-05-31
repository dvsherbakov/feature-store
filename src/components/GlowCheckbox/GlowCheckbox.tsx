import React from 'react';
import styles from './checkbox.module.scss'

const GlowCheckbox = () => {
    return (
        <div className={styles['glowCheckbox']}>
            <input type={'checkbox'} name={''} />
        </div>
    );
};

export default GlowCheckbox;