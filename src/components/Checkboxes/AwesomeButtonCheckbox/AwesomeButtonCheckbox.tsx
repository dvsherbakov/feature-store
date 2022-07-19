import React from 'react';
import styles from './AwesomeButtonCheckbox.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
import {AwesomeButtonCheckboxProps} from "./types";

const AwesomeButtonCheckbox = ({size = 80}: AwesomeButtonCheckboxProps) => {
    const labelStyle = (size: number) => ({"--sz": `${size}px`}) as React.CSSProperties;
    return (<div className={styles['abCheckbox']}>
        <label style={labelStyle(size)}>
            <input type='checkbox' name=''/>
            <span className={styles['btn']}><FontAwesomeIcon icon={faPowerOff} fontSize={size / 2}/></span>
        </label>
    </div>);
};

export default AwesomeButtonCheckbox;