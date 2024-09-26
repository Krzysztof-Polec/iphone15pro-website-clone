import { useState, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./EcosystemSection.module.scss"
import chevronUpImg from "../../images/chevron-up.svg"
import ecosystemSectionAccordions from "../../utils/ecosystemSectionAccordions"

const EcosystemSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [bigImage, setBigImage] = useState(ecosystemSectionAccordions[0].img)
  const [bigImageAlt, setBigImageAlt] = useState(ecosystemSectionAccordions[0].imgAlt)
  const contentRefs = useRef([])
  const bigImageRef = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))

  useGSAP(() => {
    gsap.from(`.${styles.ecosystemSectionHeader} h3`, {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: `.${styles.ecosystemSectionHeader} h3`,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  const handleClick = (index) => {
    if(index !== activeIndex){
      tl.current.clear()
      const prevContent = contentRefs.current[activeIndex]
      const newContent = contentRefs.current[index]

      tl.current
        .to(prevContent, { duration: 0.5, height: 0, opacity: 0, ease: "power3.in" })
        .to(newContent, { duration: 0.5, height: "auto", opacity: 1, ease: "power3.out" })

      if(window.innerWidth >= 1068){
        gsap.to(bigImageRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setBigImage(ecosystemSectionAccordions[index].img)
            setBigImageAlt(ecosystemSectionAccordions[index].imgAlt)
            gsap.to(bigImageRef.current, { opacity: 1, duration: 0.5 })
          }
        })
      }

      tl.current.play()
      setActiveIndex(index)
    }
  }

  return(
    <section className={styles.ecosystemSection}>
      <div className={styles.ecosystemSectionHeader}>
        <h3>Significant<br></br> others.</h3>
      </div>
      <div className={styles.ecosystemSectionContent}>
        <div className={styles.acordion}>
          {ecosystemSectionAccordions.map((item, index) => (
            <div key={index} className={styles.acordionItem} onClick={() => handleClick(index)}>
              <h4>
                {item.title}
                <img src={chevronUpImg} alt="arrow" className={activeIndex === index ? `${styles.open}` : ""}/>
              </h4>
              <div className={styles.acordionItemContent} ref={el => contentRefs.current[index] = el}>
                <p>{item.text}</p>
                <img src={item.img} alt={item.imgAlt}></img>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.acordionBigImage}>
          <img src={bigImage} alt={bigImageAlt} ref={bigImageRef}></img>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection