import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./WhyAppleSection.module.scss"
import whyAppleSectionSlides from "../../utils/whyAppleSectionSlides"
import rightImg from "../../images/right.svg"
import plusImg from "../../images/plus.svg"
import chevronLeft from "../../images/chevron-left.svg"
import chevronRight from "../../images/chevron-right.svg"

const WhyAppleSection = () => {
  const sliderWrapperRef = useRef(null)
  const sliderRef = useRef(null)
  const [canMoveLeft, setCanMoveLeft] = useState(false)
  const [canMoveRight, setCanMoveRight] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useGSAP(() => {
    gsap.from(`.${styles.whyAppleSectionHeader}>h2`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.whyAppleSectionHeader}>h2`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(`.${styles.whyAppleSectionHeader}>div`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.whyAppleSectionHeader}>div`,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  const updateButtonStates = () => {
    const wrapperWidth = sliderWrapperRef.current.offsetWidth
    const contentWidth = sliderRef.current.scrollWidth
    const currentX = gsap.getProperty(sliderRef.current, "x") || 0

    setCanMoveLeft(currentX < 0)
    setCanMoveRight(wrapperWidth - contentWidth < currentX)
  }

  useEffect(() => {
    updateButtonStates()
  }, [])

  const handleMoveContent = (direction) => {
    if(isAnimating) return
    
    let shiftValue
    const gapValue = 24
    const wrapperWidth = sliderWrapperRef.current.offsetWidth
    const contentWidth = sliderRef.current.scrollWidth
    const currentX = gsap.getProperty(sliderRef.current, "x") || 0

    window.innerWidth < 734 ? shiftValue = 334 + gapValue : shiftValue = 660 + (gapValue * 2)

    if((direction === "left" && currentX >= 0) || (direction === "right" && wrapperWidth - contentWidth >= currentX)) return
    
    setIsAnimating(true)

    gsap.to(sliderRef.current, {
      x: direction === "left" ? Math.min(0, currentX + shiftValue) : Math.max(wrapperWidth - contentWidth, currentX - shiftValue),
      duration: 1,
      ease: "power2.inOut",
      onUpdate: updateButtonStates,
      onComplete: () => setIsAnimating(false)
    })
  }

  return(
    <section className={styles.whyAppleSection}>
      <div className={styles.whyAppleSectionHeader}>
        <h2>Ways to shop and save at Apple.</h2>
        <div>
          <p>Shop iPhone</p>
          <img src={rightImg} alt="right"></img>
        </div>
      </div>
      <div className={styles.whyAppleSectionContent}>
        <div className={styles.sliderWrapper} ref={sliderWrapperRef}>
          <ul ref={sliderRef}>
            {whyAppleSectionSlides.map((slide) => (
              <li key={slide.id}>
                <div>
                  <img src={slide.icon} alt={slide.iconAlt}></img>
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
                <div>
                  <div>
                    <img src={plusImg} alt="plus"></img>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.whyAppleSliderController}>
          <div onClick={() => handleMoveContent("left")} className={!canMoveLeft ? `${styles.disabled}` : "" }>
            <img src={chevronLeft} alt="left"></img>
          </div>
          <div onClick={() => handleMoveContent("right")} className={!canMoveRight ? `${styles.disabled}` : "" }>
            <img src={chevronRight} alt="right"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAppleSection