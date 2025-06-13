"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./styles.module.css"
import HeroTop from "@/components/hero/top/HeroTop";
import HeroMid from "@/components/hero/mid/HeroMid";
import HeroBot from "@/components/hero/bot/HeroBot";

export default function Hero() {
      const imageRef = useRef<HTMLImageElement>(null);

      useEffect(() => {
            if (!imageRef.current) return;
            gsap.fromTo(
                  imageRef.current,
                  {
                        scale: 3,
                        opacity: 0,
                        y: 50
                  },
                  {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 2,
                        ease: "power3.out"
                  }
            );
      }, []);

      return (
            <section className={styles.hero}>
                  <div className={styles.outer}>
                        <img
                              className={styles.hero_img}
                              ref={imageRef}
                              src="/hero.webp"
                              alt="Hero Image"
                        />
                        <div className={styles.inner_b}></div>
                  </div>
                  <div className={styles.inner}>
                        <HeroTop/>
                        <HeroMid/>
                        <HeroBot/>
                  </div>
            </section>
      );
}