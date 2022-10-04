import React, {useMemo} from 'react';
import styles from './cubes.module.scss'

export const Cubes = () => {

    const element = useMemo(() => {
        const idStyle = (id: number) => ({"--i": id}) as React.CSSProperties;
        const xyStyle = (x: number, y: number) => ({"--x": x, "--y": y}) as React.CSSProperties;

        return (<div className={styles['cube']}>
            {[-1, 0, 1].map(value => <div style={xyStyle(value, 0)}>
                {[3, 2, 1].map(id => <span style={idStyle(id)}></span>)}
            </div>)}
        </div>)
    }, [])

    return (<div className={styles['container']}>
        {element}
        {element}
        {element}
    </div>);
};

