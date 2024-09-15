import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./Zoom5xSection.module.scss"
import zoom5xVideo from "../../videos/5xZoom.mp4"
import circlePlayImg from "../../images/circle-play.svg"
import circlePauseImg from "../../images/circle-pause.svg"
import circleReplayImg from "../../images/arrow-rotate-right.svg"

const Zoom5xSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVideoEnded, setIsVideoEnded] = useState(false)
  const videoRef = useRef([])

  const handleVideoControllerButtonClick = () => {
    if(isVideoEnded){
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setIsVideoEnded(false)
      setIsPlaying(true)
    }else if(isPlaying){
      videoRef.current.pause()
      setIsPlaying(false)
    }else{
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleVideoEnd = () => {
    setIsVideoEnded(true)
    setIsPlaying(false)
  }

  useGSAP(() => {
    gsap.to(`.${styles.zoom5xSectionContent}>div>video`, {
      scrollTrigger: {
        trigger: `.${styles.zoom5xSectionContent}>div>video`,
        start: "top 40%"
      },
      onComplete: () => {
        videoRef.current.play()
        setIsPlaying(true)
      }
    })

    gsap.from(`.${styles.zoom5xSectionInformations}>div:first-of-type>p:first-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.zoom5xSectionInformations}>div:first-of-type>p:first-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.zoom5xSectionInformations}>div:first-of-type>p:last-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.zoom5xSectionInformations}>div:first-of-type>p:last-of-type`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.zoom5xSectionInformations}>div:last-of-type>p`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.zoom5xSectionInformations}>div:last-of-type>p`,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })
  })

  return(
    <section className={styles.zoom5xSection}>
      <div className={styles.zoom5xSectionHeader}>
        <h4>120 mm of<br></br>pure Pro zoom.</h4>
      </div>
      <div className={styles.zoom5xSectionContent}>
        <div>
          <video ref={videoRef} preload="true" muted playsInline onEnded={handleVideoEnd}>
            <source src={zoom5xVideo}></source>
          </video>
        </div>
        <div>
          <button onClick={handleVideoControllerButtonClick}>
            <p>{isVideoEnded ? "Replay" : isPlaying ? "Pause" : "Play"}</p>
            <img
              src={isVideoEnded ? circleReplayImg : !isPlaying ? circlePlayImg : circlePauseImg}
              alt={isVideoEnded ? "replay" : !isPlaying ? "play" : "pause"}
            ></img>
          </button>
        </div>
      </div>
      <div className={styles.zoom5xSectionInformations}>
        <div>
          <p>For iPhone 15 Pro Max, we designed a 5x Telephoto camera with <span>the longest optical zoom of any iPhone ever</span> to fit in our compact Pro camera system.</p>
          <p>Now you can <span>take sharper close‑ups from farther away</span> — like a phenomenal photo of your friend or a goal in your kid’s soccer match.</p>
        </div>
        <div>
          <p><span>5x optical zoom</span><br></br>with the 120 mm lens</p>
        </div>
      </div>
      <div className={styles.zoom5xSectionCta}>
        <button>
          <p>Nerd out on 5x Telephoto</p>
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

export default Zoom5xSection