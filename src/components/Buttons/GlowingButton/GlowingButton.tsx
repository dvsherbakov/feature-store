import React from 'react';
import styles from './glowingButton.module.scss'
import {GlowingButtonProps} from "./types";

const GlowingButton = ({title, color, onClick}: GlowingButtonProps) => {
    const colorStyle = (clr: string) => ({"--clr": clr}) as React.CSSProperties;
    return (
        <div className={styles['glowingButton']}>
            <button style={colorStyle(color)} onClick={onClick}><span>{title}</span><i></i></button>
        </div>
    );
};

export default GlowingButton;