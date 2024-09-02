import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./TradeBanner.module.scss"
import rightImg from "../../images/right.svg"

const TradeBanner = () => {
  useGSAP(() => {
    gsap.to(`.${styles.tradeBaner}`, { opacity: 1, delay: 2 })
  },[])

  return(
    <div className={styles.tradeBaner}>
      <div>
        <p>Get $170-$620 in credit toward iphone 15 Pro when you trade in iPhone 11 or higher <span>Buy <img src={rightImg} alt="right"></img></span></p>
      </div>
    </div>
  )
}

export default TradeBanner