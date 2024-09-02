import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import highlightsGallerySlides from "../utils/highlightsGallerySlides"
import styles from "./HighlightsGallery.module.scss"
import playImg from "../../images/play.svg"
import pauseImg from "../../images/pause.svg"
import replayImg from "../../images/replay.svg"

const HighlightsGallery = () => {
  const videoRef = useRef([])
  const videoSpanRef = useRef([])
  const videoDivRef = useRef([])

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false
  })
  const [loadedData, setLoadedData] = useState([])

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(calc(${-100 * videoId}% - ${80 * videoId}px))`,
      duration: 2,
      ease: "power2.inOut",
    })

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
        markers: true,
        start: "top 60%"
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    })
  }, [isEnd, videoId])

  useEffect(() => {
    if(loadedData.length > 3){
      if(!isPlaying){
        videoRef.current[videoId].pause()
      }else{
        startPlay && videoRef.current[videoId].play()
      }
    }

  }, [startPlay, videoId, isPlaying, loadedData])

  const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e])

  useEffect(() => {
    let currentProgress = 0
    let span = videoSpanRef.current

    if(span[videoId]){
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100)

          if(progress != currentProgress){
            currentProgress = progress

            gsap.to(videoDivRef.current[videoId], {
              width: window.innerWidth < 760 ? "32px" : "48px"
            })

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "#F5F5F7"
            })
          }
        },

        onComplete: () => {
          if(isPlaying){
            gsap.to(videoDivRef.current[videoId], {
              width: "12px"
            })

            gsap.to(span[videoId], {
              backgroundColor: "#afafaf"
            })
          }
        }
      })

      if(videoId === 0){
        anim.restart()
      }

      const animUpdate = () => {
        anim.progress(videoRef.current[videoId].currentTime / highlightsGallerySlides[videoId].videoDuration)
      }

      if(isPlaying){
        gsap.ticker.add(animUpdate)
      }else{
        gsap.ticker.remove(animUpdate)
      }
    }
  }, [videoId, startPlay])

  const handleProcess = (type, i) => {
    switch(type){
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }))
        break

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }))
        break

      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }))
        break

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
        break

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
        break

      default:
        return video
    }
  }

  return(
    <>
      <div className={styles.highlightsGallery} id="slider">
        {highlightsGallerySlides.map((list, i) => (
          <div key={list.id}>
            <div>
              <video 
              id="video"
              playsInline={true} 
              preload="auto" 
              muted 
              ref={(el) => (videoRef.current[i] = el)} 
              onEnded={() => {
                i !== 3 ? handleProcess("video-end", i) : handleProcess("video-last")
              }}
              onPlay={() => {
                setVideo((prevVideo) => ({...prevVideo, isPlaying: true}))
              }}
              onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
              >
                <source src={list.video} type="video/mp4"></source>
              </video>
            </div>
            <div>
              {list.textLists.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.highlightsGalleryController}>
        <div>
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <p ref={(el) => (videoSpanRef.current[i] = el)}></p>
            </span>
          ))}
        </div>
        <button
          onClick={isLastVideo ? () => handleProcess("video-reset") : !isPlaying ? () => handleProcess("play") : () => handleProcess("pause")}
        >
          <img 
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            >
          </img>
        </button>
      </div>
    </>
  )
}

export default HighlightsGallery