import React, {useMemo} from 'react';
import styles from './loader.module.scss'

const Loader = () => {
    const halfCircle = useMemo(() => {
        const idStyle = (id: number) => ({"--i": id}) as React.CSSProperties;
        return (<div className={styles['circle']}>
            {Array.from(Array(20).keys()).map((itm) => (<span key={itm} style={idStyle(1 + itm)}/>))}
        </div>)
    }, [])

    return (<main className={styles['container']}>
        {halfCircle}
        {halfCircle}
    </main>);
};

export default Loader;