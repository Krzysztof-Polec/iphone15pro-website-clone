import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./BatterySection.module.scss"
import frame from "../../images/frame.png"
import batterySectionVideo from "../../videos/batterySectionVideo.mp4"
import iphoneIcon from "../../images/icon_iphone.png"

const BatterySection = () => {
  const videoRef = useRef(null)
  
  useGSAP(() => {
    gsap.to(`.${styles.batterySectionContentPhone} video`, {
      scrollTrigger: {
        trigger: `.${styles.batterySectionContentPhone} video`,
        start: "top 70%",
        toggleActions: "restart pause restart pause"
      },
      
      onComplete: () => {
        videoRef.current.play()
      }
    })

    gsap.from(`.${styles.batterySectionInformations}>div:first-of-type>p:first-of-type`,{
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.batterySectionInformations}>div:first-of-type>p:first-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.batterySectionInformations}>div:last-of-type>p:first-of-type`,{
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.batterySectionInformations}>div:last-of-type>p:first-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.batterySectionInformations}>div:first-of-type>p:last-of-type`,{
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.batterySectionInformations}>div:first-of-type>p:last-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.batterySectionInformations}>div:last-of-type>div:first-of-type`,{
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.batterySectionInformations}>div:last-of-type>div:first-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.batterySectionInformations}>div:last-of-type>div:last-of-type`,{
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.batterySectionInformations}>div:last-of-type>div:last-of-type`,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    })
  })

  return(
    <section className={styles.batterySection}>
      <div className={styles.batterySectionHeader}>
        <h4>Battery life that’s positively Pro.</h4>
        <p>Even with so many advanced new features, iPhone 15 Pro still gives you amazing all‑day battery life.</p>
      </div>
      <div className={styles.batterySectionContent}>
        <div className={styles.batterySectionContentPhone}>
          <img src={frame}></img>
          <video playsInline preload="true" muted ref={videoRef}>
            <source src={batterySectionVideo} preload="true" type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className={styles.batterySectionInformations}>
        <div>
          <p>Up to<br></br><span>29 hrs</span><br></br>video playback on iPhone 15 Pro Max</p>
          <p>Up to<br></br><span>23 hrs</span><br></br>video playback on iPhone 15 Pro</p>
        </div>
        <div>
          <p>Add a MagSafe Charger for <span>fast, efficient wireless charging</span></p>
          <div>
            <img src={iphoneIcon} alt="iphone icon"></img>
            <p>iPhone 15 Pro Max has up to 9 more hours video playback than iPhone 12 Pro Max</p>
          </div>
          <div>
            <img src={iphoneIcon} alt="iphone icon"></img>
            <p>iPhone 15 Pro has up to 6 more hours video playback than iPhone 12 Pro</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BatterySection