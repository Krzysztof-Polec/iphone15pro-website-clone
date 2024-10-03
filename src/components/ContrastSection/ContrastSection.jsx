import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./ContrastSection.module.scss"
import rightImg from "../../images/right.svg"
import iphone15pro from "../../images/iphone_15pro.avif"
import iconA17 from "../../images/icon_a17.png"
import icon3camera from "../../images/icon_3camera.png"
import iconBattery from "../../images/icon_battery.png"
import iphone15 from "../../images/iphone_15.avif"
import iconA16 from "../../images/icon_a16.png"
import icon2camera from "../../images/icon_2camera.png" 

const ContrastSection = () => {
  useGSAP(() => {
    gsap.from(`.${styles.contrastSectionHeader}>h2`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.contrastSectionHeader}>h2`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.contrastSectionHeader}>div`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.contrastSectionHeader}>div`,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return(
    <section className={styles.contrastSection}>
      <div className={styles.contrastSectionHeader}>
        <h2>Keep exploring iPhone.</h2>
        <div>
          <p>Explore all iPhone</p>
          <img src={rightImg} alt="right"></img>
        </div>
      </div>
      <div className={styles.contrastSectionContent}>
        <div className={styles.productColumn}>
          <div className={styles.productColumnHeader}>
            <img src={iphone15pro} alt="iphone 15 pro"></img>
            <div className={styles.productColors}>
              <div className={styles.naturalTitanium}></div>
              <div className={styles.blueTitanium}></div>
              <div className={styles.whiteTitanium}></div>
              <div className={styles.blackTitanium}></div>
            </div>
            <h3>iPhone 15 Pro</h3>
          </div>
          <p className={styles.productPrice}>From $999 or $41.62/mo. for 24 mo.</p>
          <div className={styles.productCta}>
            <p>Currently viewing</p>
            <div>
              <p>Buy</p>
              <img src={rightImg} alt="right"></img>
            </div>
          </div>
          <div className={styles.productDetails}>
            <div>
              <img src={iconA17} alt="icon a17"></img>
              <p>A17 Pro chip<br></br>with 6-core GPU</p>
            </div>
            <div>
              <img src={icon3camera} alt="icon 3 camera"></img>
              <p>Pro camera system</p>
              <p className={styles.text}>Our most advanced 48MP Main camera<br></br>3x or 5x Telephoto camera<br></br>Ultra Wide camera</p>
            </div>
            <div>
              <img src={iconBattery} alt="icon battery"></img>
              <p>Up to 29 hours video playback</p>
            </div>
          </div>
        </div>
        <div className={styles.productColumn}>
          <div className={styles.productColumnHeader}>
            <img src={iphone15} alt="iphone 15"></img>
            <div className={styles.productColors}>
              <div className={styles.pink}></div>
              <div className={styles.yellow}></div>
              <div className={styles.green}></div>
              <div className={styles.blue}></div>
              <div className={styles.black}></div>
            </div>
            <h3>iPhone 15</h3>
          </div>
          <p className={styles.productPrice}>From $799 or $33.29/mo. for 24 mo.</p>
          <div className={styles.productCta}>
            <p className={styles.learnMore}>Learn more</p>
            <div>
              <p>Buy</p>
              <img src={rightImg} alt="right"></img>
            </div>
          </div>
          <div className={styles.productDetails}>
            <div>
              <img src={iconA16} alt="icon a16"></img>
              <p>A16 Bionic chip<br></br>with 5-core GPU</p>
            </div>
            <div>
              <img src={icon2camera} alt="icon 2 camera"></img>
              <p>Advanced dual-camera system</p>
              <p className={styles.text}>48MP Main camera<br></br>2x Telephoto<br></br>Ultra Wide camera</p>
            </div>
            <div>
              <img src={iconBattery} alt="icon battery"></img>
              <p>Up to 26 hours video playback</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contrastSectionCta}>
        <button>
          <p>Compare all iPhone models</p>
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

export default ContrastSection