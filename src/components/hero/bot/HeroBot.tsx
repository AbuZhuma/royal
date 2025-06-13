import styles from "./styles.module.css"

const HeroBot = () => {
  return (
    <div className={styles.bot}>
      <div className={styles.count}><span>01</span>/06</div>
      <div className={styles.control}>
        <div className={styles.controller}><img src="/st.svg" alt="" /></div>
        <div className={`${styles.controller} ${styles.reverse}`}><img src="/st.svg" alt="" /></div>
      </div>
    </div>
  )
}

export default HeroBot
