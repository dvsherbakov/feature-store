import React from 'react';
import styles from './glowingButton.module.scss'
import {GlowingButtonProps} from "./types";

const GlowingButton = ({title, color}: GlowingButtonProps) => {
    const colorStyle = (clr: string) => ({"--clr": clr}) as React.CSSProperties;
    return (
        <div className={styles['glowingButton']}>
            <a href={'/'} style={colorStyle(color)}><span>{title}</span><i></i></a>
        </div>
    );
};

export default GlowingButton;