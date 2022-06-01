import React from 'react';
import styles from './AwesomeButtonCheckbox.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";

const AwesomeButtonCheckbox = () => {
    return (
        <div className={styles['abCheckbox']}>
            <label>
                <input type={'checkbox'} name={""}/>
                <span className={styles['btn']}><FontAwesomeIcon icon={faPowerOff} fontSize={40}/></span>
            </label>
        </div>
    );
};

export default AwesomeButtonCheckbox;