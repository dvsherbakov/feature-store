import React from "react";
import styles from "./bar.module.scss";

export const CircularProgressBar = () => {
  const numStyle = (num: number, color: string) => ({ "--i": num, "--clr": color }) as React.CSSProperties;

  return (
    <div className={styles["container"]}>
      <div className={styles["progress"]} style={numStyle(85, "#43f94a")}>
        <h3>
          85<span>%</span>
        </h3>
        <h4>Html</h4>
      </div>
      <div className={styles["progress"]} style={numStyle(62, "#2ccde9")}>
        <h3>
          62<span>%</span>
        </h3>
        <h4>CSS</h4>
      </div>
      <div className={`${styles["progress"]} ${styles["less"]}`} style={numStyle(35, "#fb297b")}>
        <h3>
          35<span>%</span>
        </h3>
        <h4>JavaScript</h4>
      </div>
      <div className={styles["progress"]} style={numStyle(78, "#ffe047")}>
        <h3>
          78<span>%</span>
        </h3>
        <h4>Photoshop</h4>
      </div>
    </div>
  );
};
