import HighlightsGallery from "../HighlightsGallery/HighlightsGallery"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./HighlightsSection.module.scss"
import watchImg from "../../images/watch.svg"
import rightImg from "../../images/right.svg"

gsap.registerPlugin(ScrollTrigger)

const HighlightsSection = () => {
  useGSAP(() => {
    gsap.to("#highlights-tittle", {
      transform: "translateY(0)",
      opacity: 1,
      scrollTrigger: {
        trigger: "#video",
        start: "top 90%",
        end: "top 60%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.to("#highlights-watch-film", {
      transform: "translateY(0)",
      opacity: 1,
      scrollTrigger: {
        trigger: "#video",
        start: "top 75%",
        end: "top 55%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.to("#highlights-watch-event", {
      transform: "translateY(0)",
      opacity: 1,
      scrollTrigger: {
        trigger: "#video",
        start: "top 70%",
        end: "top 50%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return(
    <section className={styles.highlightsSection}>
      <div className={styles.highlightsSectionHeader}>
        <div>
          <h2 id="highlights-tittle">Get the highlights.</h2>
        </div>
        <div>
          <p id="highlights-watch-film">Watch the film <img src={watchImg} alt="watch"></img></p>
          <p id="highlights-watch-event">Watch the event <img src={rightImg} alt="right"></img></p>
        </div>
      </div>
      <HighlightsGallery></HighlightsGallery>
    </section>
  )
}

export default HighlightsSection