import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./UsbcSection.module.scss"
import usbcImg from "../../images/usbc.avif"

const UsbcSection = () => {
  useGSAP(() => {
    gsap.from(`.${styles.usbcSectionContent} img`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.usbcSectionContent} img`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.usbcSectionInformations}>div:first-of-type>p:first-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.usbcSectionInformations}>div:first-of-type>p:first-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.usbcSectionInformations}>div:first-of-type>p:last-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.usbcSectionInformations}>div:first-of-type>p:last-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.usbcSectionInformations}>div:last-of-type>p:first-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.usbcSectionInformations}>div:last-of-type>p:first-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.usbcSectionInformations}>div:last-of-type>p:last-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.usbcSectionInformations}>div:last-of-type>p:last-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return(
    <section className={styles.usbcSection}>
      <div className={styles.usbcSectionHeader}>
        <h4>Gigablast<br></br>your gigabits.</h4>
      </div>
      <div className={styles.usbcSectionContent}>
        <img src={usbcImg} alt="usb-c"></img>
      </div>
      <div className={styles.usbcSectionInformations}>
        <div>
          <p>iPhone 15 Pro is the first iPhone to support USB 3, for a <span>huge leap in data transfer speeds</span> and faster pro workflows than ever before.</p>
          <p>The new USB‑C connector lets you <span>charge your Mac or iPad with the same cable you use to charge iPhone 15 Pro</span>. Bye‑bye, cable clutter.</p>
        </div>
        <div>
          <p>Up to<br></br><span>20x faster</span><br></br> file transfers</p>
          <p>And with all‑new Wi‑Fi 6E you'll get <span>two times faster wireless speeds</span>. So you can upload, download, and transfer files in a flash.</p>
        </div>
      </div>
      <div className={styles.usbcSectionCta}>
        <button>
          <p>Explore connectivity</p>
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

export default UsbcSection