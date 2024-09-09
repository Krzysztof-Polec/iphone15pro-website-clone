import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./ChipSection.module.scss"
import chipImg from "../../images/chip.avif"
import frameImg from "../../images/frame.png"
import frameVideo from "../../videos/frame.mp4"

const ChipSection = () => {
  const videoRef = useRef()

  useGSAP(() => {
    gsap.from(`.${styles.chipSectionHeader} img`, {
      scale: 2,
      opacity: 0,
      duration: 1.3,
      scrollTrigger: {
        trigger: `.${styles.chipSectionHeader} img`,
        start: "top 65%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.to(`.${styles.iphoneFrameContent} div video`, {
      scrollTrigger: {
        trigger: `.${styles.iphoneFrameContent} div video`,
        start: "top 70%",
        toggleActions: "restart pause restart pause"
      },
      
      onComplete: () => {
        videoRef.current.play()
      }
    })

    gsap.to(`.${styles.chipSectionInformations} div div p`, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: `.${styles.chipSectionInformations} div div p`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return(
    <section className={styles.chipSection}>
      <div className={styles.chipSectionHeader}>
        <img src={chipImg} alt="chip"></img>
        <h4>A17 Pro chip.<br></br>A monster win<br></br>for gaming.</h4>
        <p>It’s here. The biggest redesign in the history of Apple GPUs.</p>
      </div>
      <div className={styles.chipSectionContent}>
        <div className={styles.iphoneFrame}>
          <div className={styles.iphoneFrameContent}>
            <img src={frameImg} alt="frame"></img>
            <div>
              <video playsInline preload="true" muted ref={videoRef}>
                <source src={frameVideo} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <div>
          <p>Honkai: Star Rail</p>
        </div>
      </div>
      <div className={styles.chipSectionInformations}>
        <div>
          <div>
            <p>A17 Pro is an entirely new class of iPhone chip that delivers our <span>best graphics performance by far</span>.</p>
            <p>Mobile <span>games will look and feel so immersive</span>, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.</p>
          </div>
          <div>
            <p>New<br></br><span>Pro-class GPU</span><br></br>with 6 cores</p>
          </div>
        </div>
      </div>
      <div className={styles.chipSectionCta}>
        <button>
          <p>Go deeper on A17 Pro</p>
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

export default ChipSection