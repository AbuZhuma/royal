import styles from "./styles.module.css"

const HeroTop = () => {
      return (
            <div className={styles.top_head}>
                  <div className={styles.setting}>
                        <div className={styles.theme_changer}><img src="/moon.svg" alt="" /></div>
                        <p className={styles.basic_p}>+996 556 111 444</p>
                        <div className={styles.lang_changer}>
                              <img src="/globus.svg" alt="" />
                              <p className={styles.lang}>Русский</p>
                              <div className={styles.opener}></div>
                        </div>
                  </div>
                  <div className={styles.logo}>
                        <div className={styles.inner_logo}><img src="/logo.svg" alt="" /></div>
                  </div>
                  <div className={styles.burger}>
                        <p className={styles.burger_p}>Квартиры и объекты</p>
                        <img className={styles.burger_img} src="/burger.svg" alt="" />
                  </div>
            </div>
      )
}

export default HeroTop
