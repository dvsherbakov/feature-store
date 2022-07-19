import React from 'react';
import styles from './checkbox.module.scss'

const GlowCheckbox = (props: React.HTMLAttributes<any>) => {
    return (
        <div className={styles['glowCheckbox']}>
            <input type='checkbox' name='' {...props}/>
        </div>
    );
};

export default GlowCheckbox;