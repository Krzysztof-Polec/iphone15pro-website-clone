import { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./CameraSection.module.scss"
import lensGallerySlides from "../../utils/lensGallerySlides"
import cameraImg from "../../images/camera.avif"
import chevronLeft from "../../images/chevron-left.svg"
import chevronRight from "../../images/chevron-right.svg"
import camera48mp from "../../images/48mp_camera.avif"

const CameraSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideCaptionRef = useRef()
  const galleryRef = useRef()

  useGSAP(() => {
    gsap.from(`.${styles.cameraSectionHeader} div h4`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.cameraSectionHeader} div h4`,
        start: "top 75%",
        end: "top: 40%",
        scrub: true
      }
    })

    gsap.from(`.${styles.cameraSectionHeader} div p`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.cameraSectionHeader} div p`,
        start: "top 75%",
        end: "top 40%", 
        scrub: true
      }
    })

    gsap.from(`.${styles.cameraSectionImageWrapper} img`, {
      scale: 1.225,
      scrollTrigger: {
        trigger: `.${styles.cameraSection} div p`,
        start: "top 75%",
        end: "top 20%",
        scrub: true
      }
    })

    gsap.from(`.${styles.cameraSectionLenses}>div>p`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.cameraSectionLenses}>div>p`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.cameraSectionDetails}>div>div>div>img`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.cameraSectionDetails}>div>div>div>img`,
        start: "top 65%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.cameraSectionDetails}>div>div>div>p:first-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.cameraSectionDetails}>div>div>div>p:first-of-type`,
        start: "top 65%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.cameraSectionDetails}>div>div>div>p:last-of-type`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.cameraSectionDetails}>div>div>div>p:last-of-type`,
        start: "top 65%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  const changeSlide = (direction) => {
    if(direction === "left" && currentSlide > 0) setCurrentSlide(currentSlide - 1)

    if(direction === "right" && currentSlide < lensGallerySlides.length - 1) setCurrentSlide(currentSlide + 1)
  }

  useEffect(() => {
    let slideWidth

    window.innerWidth < 734 ? slideWidth = 274 : slideWidth = 653

    const translateX = -(slideWidth + 10) * currentSlide

    gsap.to(galleryRef.current, {
      x: translateX,
      duration: 1,
      ease: "power2.inOut"
    })

    gsap.to(`.${styles.lensGalleryController} p` , {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        slideCaptionRef.current.innerHTML = `<span>${lensGallerySlides[currentSlide].caption.lens}</span> ${lensGallerySlides[currentSlide].caption.details}`
        gsap.to(slideCaptionRef.current, { opacity: 1, duration: 0.5 })
      }
    })
  }, [currentSlide])

  return(
    <section className={styles.cameraSection}>
      <div className={styles.cameraSectionHeader}>
        <div>
          <h4>A camera that captures your wildest imagination.</h4>
          <p>From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.</p>
        </div>
      </div>
      <div className={styles.cameraSectionImageWrapper}>
        <img src={cameraImg} alt="A detailed photo of a green iguana, captured with the 48MP Main camera on iPhone 15 Pro camera"></img>
      </div>
      <div className={styles.cameraSectionIguanaImageCaption}>
        <p>A green iguana, captured by the 48MP Main camera</p>
      </div>
      <div className={styles.cameraSectionLenses}>
        <div>
          <p>With iPhone 15 Pro, you have multiple focal lengths to work with. It’s like having <span>seven pro lenses in your pocket</span>, everywhere you go.</p>
        </div>
        <div className={styles.lensGallery} ref={galleryRef}>
          <div>
            <ul>
              {lensGallerySlides.map((el, index) => (
                <li key={el.id} className={index === currentSlide ? `${styles.active}` : ""}>
                  <img src={el.img} alt={el.alt}></img>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.lensGalleryController}>
          <div>
            <p ref={slideCaptionRef}></p>
          </div>
          <div>
            <div onClick={() => changeSlide("left")} className={currentSlide === 0 ? `${styles.disabled}` : ""}>
              <img src={chevronLeft} alt="left"></img>
            </div>
            <div onClick={() => changeSlide("right")} className={currentSlide === lensGallerySlides.length - 1 ? `${styles.disabled}` : ""}>
              <img src={chevronRight} alt="right"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cameraSectionDetails}>
        <div>
          <div>
            <div>
              <img src={camera48mp} alt="48mp camera"></img>
            </div>
            <div>
              <p>The 48MP Main camera is more advanced than ever, capturing super‑high‑resolution photos with a <span>new level of detail and color</span>.</p>
              <p>You’ll see the improvements in your portraits. And now you no longer have to switch to Portrait mode. If your subject is a person, dog, or cat, iPhone automatically captures depth information. So you can choose to instantly <span>see your photo as a portrait</span>, with an artful blur effect. Or later in the Photos app.</p>
            </div>
          </div>
        </div>
        <div>
          <p>Shoot magical spatial videos,<br></br> then relive them on Apple Vision Pro</p>
        </div>
      </div>
      <div className={styles.cameraSectionCta}>
        <button>
          <p>Zoom in on the cameras</p>
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

export default CameraSection