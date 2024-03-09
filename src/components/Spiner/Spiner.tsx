import styles from './spinner.module.scss'
import React, {useMemo, useRef} from "react";
export const Spinner = () => {
    const inner = useRef<HTMLDivElement>(null)
    const outer = useRef<HTMLDivElement>(null)
    const clickHandler = () => {
        inner && inner.current && (inner.current.style.setProperty('transform', `rotate(${Math.ceil(Math.random() * -3600)}deg)`))
        outer && outer.current && (outer.current.style.setProperty('transform', `rotate(${Math.ceil(Math.random() * 3600)}deg)`))
    }

    const numbers = useMemo(() => {
        const idStyle = (id: number) => ({"--i": id}) as React.CSSProperties;
       return (<>
           {[0,1,2,3,4].map(x=><span key={x} style={idStyle(x)}/>)}
           <div className={styles['number']}>
           {[5,1,4,5,2,8,7,3].map((x, idx)=><b key={idx} style={idStyle(idx)}>{x}</b>)}
        </div>
           </>)
    }, [])

    return <div className={styles['container']}>
        <div className={styles['spinBtn']} onClick={clickHandler}>Spin</div>
        <div className={styles['wheel']} ref={outer}>
            {numbers}
        </div>
        <div className={[styles['wheel'], styles['inner']].join(' ')} ref={inner}>
            {numbers}
        </div>
    </div>
}