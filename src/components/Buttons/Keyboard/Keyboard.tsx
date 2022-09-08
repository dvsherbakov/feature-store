import React, {useMemo} from "react";
import styles from "./keyboard.module.scss";

const Keyboard = () => {
    const rows = useMemo<JSX.Element[]>(() => [
        "qwertyuiop", "asdfghjkl", "zxcvbnm",
    ].map((row, idx) => (<div key={`row_${idx}`}>
            {row.split("").map((btn) => <span key={`key_${btn}`} onClick={() => {
                console.log(btn);
            }}><i>{btn}</i></span>)}
        </div>),
    ), []);

    return (
        <div className={styles["keyboard"]}>
            {rows}
        </div>
    );
};

export default Keyboard;