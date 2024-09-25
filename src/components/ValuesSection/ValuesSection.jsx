import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./ValuesSection.module.scss"
import valuesImg from "../../images/values.avif"

const ValuesSection = () => {
  useGSAP(() => {
    gsap.from(`.${styles.valuesSectionContent}>p:first-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.valuesSectionContent}>p:first-of-type`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.valuesSectionContent}>p:last-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.valuesSectionContent}>p:last-of-type`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return(
    <section className={styles.valuesSection}>
      <div className={styles.valuesSectionHeader}>
        <img src={valuesImg} alt="values"></img>
        <h4>Designed to<br></br>make a difference.</h4>
      </div>
      <div className={styles.valuesSectionContent}>
        <p><span>What matters to you matters to Apple, too.</span> From privacy protections that give you more control over your data. To using more recycled materials that minimize environmental impact. To creating built‑in features that make iPhone accessible to all.</p>
        <p>The internal structural frame of iPhone 15 Pro has<br></br><span>100% recycled aluminum</span></p>
      </div>
      <div className={styles.valuesSectionCta}>
        <button>
          <p>What iPhone stands for</p>
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
    </section>
  )
}

export default ValuesSection