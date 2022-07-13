import React, {useState} from 'react';
import {TShortAddress} from "./types";

import styles from './locations.module.scss'


type TLocationListProps = {
    list: TShortAddress[],
    onSelect: (adr: string) => void
}

export const LocationsList = ({list, onSelect}: TLocationListProps) => {
    const [selected, setSelected] = useState<number | undefined>(undefined)
    const body = (<div className={styles['list']}>
        {list.map(item => <div
            className={selected === item.id ? `${styles['listItem']} ${styles['selected']}` : styles['listItem']}
            onClick={() => setSelected(item.id)}
            key={item.id.toString()}>{item.label ?? `${item.region}, ${item.street}, ${item.number}, ${item.country}`}</div>)}
    </div>)
    return (
        <div className={styles['locations']}>
            {body}
            <button onClick={() => onSelect(list[selected ?? 0].label ?? '')}>«</button>
        </div>
    );
};
