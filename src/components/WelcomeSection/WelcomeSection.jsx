import { useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import heroVideo from "../../videos/hero.mp4"
import smallHeroVideo from "../../videos/smallHero.mp4"
import styles from "./WelcomeSection.module.scss"

const WelcomeSection = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 734 ? smallHeroVideo : heroVideo)

  const handleVideoSrcChange = () => window.innerWidth < 734 ? setVideoSrc(smallHeroVideo) :  setVideoSrc(heroVideo)

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcChange)

    return () => {
      window.removeEventListener("resize", handleVideoSrcChange)
    }
  }, [])

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 })

    gsap.to("#welcomeBuy", { opacity: 1, y: -20, delay: 2 })
    gsap.to("#welcomePrice", { opacity: 1, y: -20, delay: 2.2 })

  }, [])

  return(
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeVideo}>
        <div>
          <p id="hero">iPhone 15 Pro</p>
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className={styles.welcomeCta}>
        <p id="welcomeBuy">Buy</p>
        <p id="welcomePrice">From $999 or $41.62/mo. for 24 mo.</p>
      </div>
    </section>
  )
}

export default WelcomeSection