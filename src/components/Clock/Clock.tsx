import React, {useMemo} from 'react';
import styles from './clock.module.scss'

const Clock = () => {
    const Circle = useMemo(() => {
        const idStyle = (id: number) => ({"--i": id}) as React.CSSProperties;
        return (<ul>
            {Array.from(Array(12).keys()).map((itm) => (
                <li key={itm.toString()} style={idStyle(1 + itm)}><span>{1 + itm}</span></li>))}
        </ul>)
    }, [])
    return (
        <div className={styles['container']}>
            <div className={styles['clock']}>
                {Circle}
            </div>
        </div>
    );
};

export default Clock;