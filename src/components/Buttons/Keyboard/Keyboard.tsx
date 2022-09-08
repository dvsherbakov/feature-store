import React from "react";
import styles from "./keyboard.module.scss";

const Keyboard = () => {
    const rows = [
        "qwertyuiop", "asdfghjkl", "zxcvbnm",
    ].map((row) => (<div>
            {row.split("").map((btn) => <span><i>{btn}</i></span>)}
        </div>),
    );
    return (
        <div className={styles["keyboard"]}>
            {rows}
        </div>
    );
};

export default Keyboard;