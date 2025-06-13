"use client";

import { useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import gsap from "gsap";

const HeroMid = () => {
      const [showHeading, setShowHeading] = useState(false)
      const lgheadRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
            if (!lgheadRef.current) return;
            gsap.fromTo(
                  lgheadRef.current,
                  {},
                  {
                        top: "-70px",
                        translateX: "3px",
                        width: "60px",
                        duration: 2,
                        ease: "power3.out"
                  }
            );
            const timeout = setTimeout(() => {
                  setShowHeading(true)
            }, 100)
            return () => {
                  clearTimeout(timeout)
            }
      }, []);
      return (
            <div className={styles.mid_head}>
                  <div ref={lgheadRef} className={styles.lg_head}>
                        <img className={styles.lg_img} src="/lg_head.png" alt="" />
                  </div>

                  <div className={`${styles.heading} ${showHeading ? styles.show : styles.hide}`}>
                        <p className={styles.title}>Роскошный пансионат <span>Royal Resort</span> на берегу живописного озера <span>Иссык-Куль</span>. </p>
                        <p className={styles.subtitle}>Здесь, среди живописных гор, вы сможете насладиться незабываемым отдыхом и комфортом наивысшего уровня.</p>
                  </div>
            </div>
      )
}

export default HeroMid
