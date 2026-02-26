import styles from "./Controls.module.css"
import previous from "../../assets/previous.svg";
import nextSvg from "../../assets/next.svg";
import random1 from "../../assets/random1.svg";
import random2 from "../../assets/random2.svg";

export function Controls({ prev, next, rand1, rand2 }) {
    return <div className={styles.icons}>
        <img onClick={prev} className={styles.icon} src={previous} alt="prev" />
        <img onClick={rand1} className={styles.icon} src={random1} alt="random 1" />
        <img onClick={rand2} className={styles.icon} src={random2} alt="random 2" />
        <img onClick={next} className={styles.icon} src={nextSvg} alt="next" />
    </div>
}