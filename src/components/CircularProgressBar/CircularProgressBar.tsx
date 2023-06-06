import React, {useCallback} from "react";
import styles from "./bar.module.scss";

export const CircularProgressBar = () => {

    const card = useCallback((percent: number, text: string, color: string) => {
        const numStyle = (num: number, color: string) => ({"--i": num, "--clr": color}) as React.CSSProperties;

        const st = [styles["progress"], percent < 50 ? styles["less"] : ''].join(' ')
        return (<div className={st} style={numStyle(percent, color)}>
            <h3>
                {percent}<span>%</span>
            </h3>
            <h4>{text}</h4>
        </div>)
    }, [])

    return (
        <div className={styles["container"]}>
            {card(85, 'Html', "#43f94a")}
            {card(63, 'SCC', "#2ccde9")}
            {card(35, 'JavaScript', "#fb297b")}
            {card(78, 'Dart', "#ffe047")}
        </div>
    );
};
