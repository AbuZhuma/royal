import { FC } from "react";
import styles from "./styles.module.css";

interface IPulseButton {
  text: string
}

const PulseButton:FC<IPulseButton> = ({text}) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.pulseRing}></div>
      <div className={styles.pulseRing}></div>
      <div className={styles.pulseRing}></div>
      <button className={styles.roundButton}>{text}</button>
    </div>
  );
};

export default PulseButton;