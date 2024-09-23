import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./SafetySection.module.scss"

const SafetySection = () => {
  useGSAP(() => {
    gsap.from(`.${styles.safetySectionContentInformations}>p:first-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.safetySectionContentInformations}>p:first-of-type`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.safetySectionContentInformations}>p:last-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.safetySectionContentInformations}>p:last-of-type`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return(
    <section className={styles.safetySection}>
      <div className={styles.safetySectionHeader}>
        <div>
          <h4>In an emergency,<br></br>iPhone has your back.</h4>
        </div>
      </div>
      <div className={styles.safetySectionContent}>
        <div className={styles.safetySectionContentInformations}>
          <p>New <span>Roadside Assistance via satellite</span> can get you help for things like a flat tire or a dead battery, even when you’re off the grid.</p>
          <p>iPhone also has <span>Emergency SOS via satellite and Crash Detection</span>, two vital safety features that have helped save lives.</p>
        </div>
        <div className={styles.safetySectionCta}>
          <button>
            <p>Learn how it all works</p>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 
                224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 
                32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SafetySection