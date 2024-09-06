import styles from "./DesignSection.module.scss"
import titaniumVideo from "../../videos/explore.mp4"
import lightestImg from "../../images/explore1.avif"
import durableImg from "../../images/explore2.avif"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const DesignSection = () => {
  const videoRef = useRef()

  useGSAP(() => {
    gsap.to(`.${styles.designSectionHeader} h2`, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: `.${styles.designSectionHeader} h2`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.to(`.${styles.titanium} video`, {
      scrollTrigger: {
        trigger: `.${styles.titanium}`,
        start: "top 65%",
        toggleActions: "restart pause restart pause"
      },
      
      onComplete: () => {
        videoRef.current.play()
      }
    })

    gsap.to(`.${styles.lightest} img`, {
      scale: 1,
      opacity: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: `.${styles.lightest}`,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "restart reverse restart reverse",
        scrub: true
      }
    })

    gsap.to(`.${styles.durable} img`, {
      scale: 1,
      opacity: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: `.${styles.durable}`,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "restart reverse restart reverse",
        scrub: true
      }
    })

    gsap.to(`.${styles.designSectionInformation} p`, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: `.${styles.designSectionInformation} p`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  },[])

  return(
    <section className={styles.designSection}>
      <div className={styles.designSectionHeader}>
        <h2>Explore the full story.</h2>
      </div>
      <div className={styles.designSectionContent}>
        <h4>iPhone.<br></br>Forged in titanium.</h4>
        <div className={styles.designGrid}>
          <div className={styles.designGridContent}>
            <div className={`${styles.titanium} ${styles.gridItem}`}>
              <video playsInline preload="true" muted ref={videoRef}>
                <source src={titaniumVideo} type="video/mp4"></source>
              </video>
            </div>
            <div className={`${styles.lightest} ${styles.gridItem}`}>
              <img src={lightestImg} alt="lightest"></img>
            </div>
            <div className={`${styles.durable} ${styles.gridItem}`}>
              <img src={durableImg} alt="durable"></img>
            </div>
          </div>
        </div>
        <div className={styles.designSectionInformation}>
          <div>
            <p>iPhone 15 Pro is <span>the first iPhone to feature an aerospace-grade titanium design</span>, using the same alloy that spacecraft use for missions to Mars.</p>
            <p>Titanium has one of the best strength-to-weight ratios of any metal, making these our <span>lightest Pro models ever</span>. You’ll notice the difference the moment you pick one up.</p>
          </div>
        </div>
        <div className={styles.designSectionCta}>
          <button>
            <p>More on design & display</p>
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

export default DesignSection