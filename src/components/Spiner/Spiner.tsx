import styles from './spinner.module.scss'
import React, {useRef} from "react";
export const Spinner = () => {
    const inner = useRef<HTMLDivElement>(null)
    const outer = useRef<HTMLDivElement>(null)
    const clickHandler = () => {
        inner && inner.current && (inner.current.style.setProperty('transform', `rotate(${Math.ceil(Math.random() * -3600)}deg)`))
        outer && outer.current && (outer.current.style.setProperty('transform', `rotate(${Math.ceil(Math.random() * 3600)}deg)`))
    }

    const idStyle = (id: number) => ({"--i": id}) as React.CSSProperties;

    return <div className={styles['container']}>
        <div className={styles['spinBtn']} onClick={clickHandler}>Spin</div>
        <div className={styles['wheel']} ref={outer}>
            <span style={idStyle(0)}/>
            <span style={idStyle(1)}/>
            <span style={idStyle(2)}/>
            <span style={idStyle(3)}/>
            <span style={idStyle(4)}/>
            <div className={styles['number']}>
                <b style={idStyle(0)}>5</b>
                <b style={idStyle(1)}>1</b>
                <b style={idStyle(2)}>4</b>
                <b style={idStyle(3)}>5</b>
                <b style={idStyle(4)}>2</b>
                <b style={idStyle(5)}>8</b>
                <b style={idStyle(6)}>7</b>
                <b style={idStyle(7)}>3</b>
            </div>
        </div>
        <div className={[styles['wheel'], styles['inner']].join(' ')} ref={inner}>
            <span style={idStyle(0)}/>
            <span style={idStyle(1)}/>
            <span style={idStyle(2)}/>
            <span style={idStyle(3)}/>
            <span style={idStyle(4)}/>
            <div className={styles['number']}>
                <b style={idStyle(0)}>5</b>
                <b style={idStyle(1)}>1</b>
                <b style={idStyle(2)}>4</b>
                <b style={idStyle(3)}>5</b>
                <b style={idStyle(4)}>2</b>
                <b style={idStyle(5)}>8</b>
                <b style={idStyle(6)}>7</b>
                <b style={idStyle(7)}>3</b>
            </div>
        </div>
    </div>
}