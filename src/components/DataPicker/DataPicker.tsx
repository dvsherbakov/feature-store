import React from 'react';
import styles from './datapicker.module.scss'
import {getMonthDays} from "./getMonthDays";

export const DataPicker = () => {
    const month = 7
    const m = getMonthDays(2021, month)
    const dataViewer = m.map((itm, idx) => (
        <div key={idx.toString()}
             className={[styles['dayViewer'], [itm.getDay() === 0 ? styles['red'] : '']].join(' ')}>
            {itm.getDate()}
        </div>))

    return (
        <div className={styles['dataPicker']}>
            <div className={styles['dataViewer']}> {dataViewer} </div>
        </div>
    );
};