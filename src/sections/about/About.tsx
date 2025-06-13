import PulseButton from "@/components/about/button/Pulsebtn"
import styles from "./styles.module.css"

const About = () => {
      return (
            <div className={styles.about}>
                  <h1 className={styles.h1}><span>Для нас строительство</span> — это искусство создавать надёжные, функциональные и вдохновляющие пространства</h1>
                  <div className={styles.inner}>
                        <div className={styles.col1}>
                              <p className={styles.about_comp}>О компании</p>
                              <img className={styles.col1_img} src="/building1.png" alt="" />
                              <p className={styles.desc}><img src="/R.png" /> oyal - строительная компания, которая сдает свои объекты в эксплуатацию в обещанные сроки.</p>
                              <p className={styles.desc}>Наши объекты строятся в 5-минутной ходьбе от парково-прогулочных зон, основных объектов соцбыта с удобной транспортной развязкой.</p>
                              <PulseButton text="читать все"/>
                        </div>
                        <div className={styles.col2}>
                              <img className={styles.col2_img} src="/building2.png" alt="" />
                        </div>
                  </div>
            </div>
      )
}

export default About
