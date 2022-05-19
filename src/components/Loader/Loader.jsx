import React, {useMemo} from 'react';
import styles from './loader.module.scss'

const Loader = () => {
    const halfCircle = useMemo(() =>
        (<div className={styles['circle']}>
            {Array.from(Array(20).keys()).map((itm) => (<span key={itm} style={{['--i']: 1 + itm}}/>))}
        </div>), [])

    return (<main className={styles['container']}>
        {halfCircle}
        {halfCircle}
    </main>);
};

export default Loader;