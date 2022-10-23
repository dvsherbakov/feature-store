import React from 'react';
import styles from './simplePercentCard.module.scss'

interface ComponentProperties {
    text?: string,
    pc?: number
}

export const SimplePercentCard = ({text = 'Caption', pc= 55}: ComponentProperties) => {

    const numStyle = (num: number) => ({"--num": num}) as React.CSSProperties;
    return (
        <div className={styles['card']} style={numStyle(pc)}>
            {pc}%
            <svg>
                <circle cx='80' cy='80' r='70'></circle>
                <circle className={styles["arc"]} cx='80' cy='80' r='70'></circle>
            </svg>
            <div className={styles["centerSpot"]}>
                {text}
            </div>
        </div>
    );
};

