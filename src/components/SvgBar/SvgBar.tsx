import React, {useRef} from 'react';
import styles from './svgBar.module.scss'

export const SvgBar = () => {
    const svgRef = useRef<SVGSVGElement>(null)
    const data = Array.from(Array(698).keys()).map(itm => ['L', Math.trunc(Math.random() * 299), itm + 1].join(' '))

    const handleWheelEvent = (e: React.WheelEvent) => {
        const client = svgRef.current?.getBoundingClientRect()
        if (client)
        console.log(e.clientX-client?.x, e.clientY-client.y, e.deltaY)
    };


    return (
        <div className={styles["svgBar"]}>
            <h1>Test SVG</h1>
            <svg width="300" height="700" xmlns="http://www.w3.org/2000/svg" onWheel={handleWheelEvent}
                 ref={svgRef}>

                <path d={`M1 0 ${data.join(' ')} L 1 698`}/>


            </svg>
        </div>
    );
};
