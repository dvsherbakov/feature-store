import React from 'react';
import styles from './percentCard.module.scss'

export const PercentCard = () => {
    const numStyle = (num: number) => ({"--num": num}) as React.CSSProperties;
    return (
        <div className={styles["percentCard"]}>
            <div className={styles["box"]}>
                <div className={styles["shadow"]}></div>
                <div className={styles["content"]}>
                    <div className={styles["percent"]} data-text='Html' style={numStyle(85)}>
                        <div className={styles["dot"]}>
                            <svg>
                                <circle cx='70' cy='70' r='70'></circle>
                                <circle cx='70' cy='70' r='70'></circle>
                            </svg>
                        </div>
                    </div>
                    <div className={styles["number"]}>
                        <h2>85<span>%</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

