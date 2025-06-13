import Hero from "@/sections/hero/Hero";
import styles from "./page.module.css"
import About from "@/sections/about/About";
import Objects from "@/sections/objects/Objects";
import PulseButton from "@/components/about/button/Pulsebtn";
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Objects />
      <div className={styles.last}>
        <PulseButton text="Смотреть все" />
      </div>
    </main>
  );
}