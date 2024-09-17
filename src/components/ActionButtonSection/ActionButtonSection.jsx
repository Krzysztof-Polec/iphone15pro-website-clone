import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./ActionButtonSection.module.scss"
import actionButtonFrameImg from "../../images/action_button_frame.png"
import screenRingSilentImg from "../../images/screen_ring_silent.avif"
import actionButtonGradientImg from "../../images/gradient.png"
import actionButtonFunctions from "../../utils/actionButtonFunctions"
import chevronLeftImg from "../../images/chevron-left.svg"
import chevronRightImg from "../../images/chevron-right.svg"

const ActionButtonSection = () => {
  const [currentScreenContentImg, setCurrentScreenContentImg] = useState(screenRingSilentImg)
  const [activeId, setActiveId] = useState(1)
  const screenImageContentRef = useRef(null)
  const [canMoveLeft, setCanMoveLeft] = useState(false)
  const [canMoveRight, setCanMoveRight] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const actionButtonFunctionsWrapperRef = useRef(null)
  const actionButtonFunctionsRef = useRef(null)

  useEffect(() => {
    updateButtonStates()
  }, [])

  const updateButtonStates = () => {
    const wrapperWidth = actionButtonFunctionsWrapperRef.current.offsetWidth
    const contentWidth = actionButtonFunctionsRef.current.scrollWidth
    const currentX = gsap.getProperty(actionButtonFunctionsRef.current, "x") || 0

    setCanMoveLeft(currentX < 0)
    setCanMoveRight(wrapperWidth - contentWidth < currentX)
  }

  useGSAP(() => {
    if(screenImageContentRef.current){
      gsap.fromTo(
        screenImageContentRef.current,
        { opacity: 0.3 },
        { opacity: 1, duration: 1 }
      )
    }
  }, [currentScreenContentImg])

  const handleListItemClick = (imgSrc, id) => {
    setCurrentScreenContentImg(imgSrc)
    setActiveId(id)
  }

  const handleMoveContent = (direction) => {
    if(isAnimating) return
    const shiftValue = 187
    const wrapperWidth = actionButtonFunctionsWrapperRef.current.offsetWidth
    const contentWidth = actionButtonFunctionsRef.current.scrollWidth
    const currentX = gsap.getProperty(actionButtonFunctionsRef.current, "x") || 0

    if((direction === "left" && currentX >= 0) || (direction === "right" && wrapperWidth - contentWidth >= currentX)) return
    
    setIsAnimating(true)

    gsap.to(actionButtonFunctionsRef.current, {
      x: direction === "left" ? Math.min(0, currentX + shiftValue) : Math.max(wrapperWidth - contentWidth, currentX - shiftValue),
      duration: 1,
      ease: "power2.inOut",
      onUpdate: updateButtonStates,
      onComplete: () => setIsAnimating(false)
    })
  }

  useGSAP(() => {
    gsap.from(`.${styles.actionButtonSectionInformations}>p`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.actionButtonSectionInformations}>p`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return(
    <section className={styles.actionButtonSection}>
      <div className={styles.actionButtonSectionHeader}>
        <h4>Get in on the Action button.</h4>
      </div>
      <div className={styles.actionButtonSectionContent}>
        <p>The all‑new Action button is <span>a fast track to your favorite feature</span>. Once you set the one you want, just press and hold to launch the action.</p>
        <div>
          <div>
            <ul>
              <span onClick={() => handleMoveContent("left")} className={!canMoveLeft ? `${styles.disabled}` : "" }>
                <img src={chevronLeftImg} alt="left"></img>
              </span>
              <div ref={actionButtonFunctionsWrapperRef}>
                <div ref={actionButtonFunctionsRef}>
                  {actionButtonFunctions.map(el => (
                    <li key={el.id} onClick={() => handleListItemClick(el.img, el.id)} className={activeId === el.id ? styles.active : ""}>
                      <img src={el.icon} alt={el.text}></img>
                      <p>{el.text}</p>
                    </li>
                  ))}
                </div>
              </div>
              <span onClick={() => handleMoveContent("right")} className={!canMoveRight ? `${styles.disabled}` : "" }>
                <img src={chevronRightImg} alt="right"></img>
              </span>
            </ul>
          </div>
          <div>
            <div className={styles.actionButtonFrame}>
              <img src={actionButtonFrameImg} alt="action button frame"></img>
            </div>
            <div className={styles.actionButtonScreenContent}>
              <img src={currentScreenContentImg} alt="screen content" ref={screenImageContentRef}></img>
              <div className={styles.pin}></div>
            </div>
            <div className={styles.actionButtonGradient}>
              <img src={actionButtonGradientImg} alt="gradient"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actionButtonSectionInformations}>
        <p>By default, the <span>Action button is set to toggle between Ring and Silent modes</span>. If you choose a different action, you can use Control Center to mute or use Focus filters to automatically set your iPhone to silent.</p>
        <p>Whatever you’re doing, the Action button is at the ready. Launch Camera to catch a spontaneous selfie. Record an instant voice memo. You can even <span>select Shortcut to open an app or run a series of tasks</span> like switching on the lights in your living room and playing music.</p>      
      </div>
    </section>
  )
}

export default ActionButtonSection