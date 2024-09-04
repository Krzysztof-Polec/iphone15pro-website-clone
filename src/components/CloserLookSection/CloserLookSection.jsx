import { useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import IphoneModelView from "../IphoneModelView/IphoneModelView"
import closerLookSectionModels from "../../utils/closerLookSectionModels"
import closerLookSectionSizes from "../../utils/closerLookSectionSizes"
import styles from "./CloserLookSection.module.scss"
import yellowImg from "../../images/yellow.jpg"

const CloserLookSection = () => {
  const [size, setSize] = useState("small")
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  })

  const cameraControlSmall = useRef()
  const cameraControlLarge = useRef()

  const small = useRef(new THREE.Group())
  const large = useRef(new THREE.Group())

  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)

  const tl = useRef(gsap.timeline({ paused: true })).current

  useEffect(() => {
    tl.clear()
  
    const animateCamera = (cameraControl, toPosition, toRotation) => {
      if(cameraControl && cameraControl.current){
        gsap.to(cameraControl.current.object.position, {
          x: toPosition.x,
          y: toPosition.y,
          z: toPosition.z,
          duration: 1,
          ease: "power2.inOut",
        })
  
        gsap.to(cameraControl.current.object.rotation, {
          x: toRotation.x,
          y: toRotation.y,
          z: toRotation.z,
          duration: 1,
          ease: "power2.inOut",
        })
      }
    }
  
    if(size === "large"){
      animateCamera(cameraControlSmall, { x: 0, y: 0, z: 3 }, { x: 0, y: 0, z: 0 })
    }else if(size === "small"){
      animateCamera(cameraControlLarge, { x: 0, y: 0, z: 3 }, { x: 0, y: 0, z: 0 })
    }
  
    if(size === "large"){
      setLargeRotation(small.current.rotation.y)
  
      tl.to(small.current.rotation, {
        y: smallRotation,
        duration: 1,
        ease: "power2.inOut",
      }).to("#view1", {
            transform: "translateX(-100%)",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        ).to("#view2", {
            transform: "translateX(-100%)",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        )
    }
  
    if(size === "small"){
      setSmallRotation(large.current.rotation.y)
  
      tl.to(large.current.rotation, {
        y: largeRotation,
        duration: 1,
        ease: "power2.inOut",
      }).to("#view2", {
            transform: "translateX(100%)",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        ).to("#view1", {
            transform: "translateX(0)",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        )
    }
  
    tl.play()
  }, [size, smallRotation, largeRotation, tl])

  useGSAP(() => {
    gsap.to("#closer-look-section-header", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: `.${styles.closerLookSectionContent}`,
        start: "top 90%",
        end: "top 60%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return(
    <section className={styles.closerLookSection}>
      <div className={styles.closerLookSectionHeader}>
        <h2 id="closer-look-section-header">Take a closer look.</h2>
      </div>
      <div className={styles.closerLookSectionContent}>
        <IphoneModelView
          index={1}
          groupRef={small}
          gsapType="view1"
          controlRef={cameraControlSmall}
          setRotatationState={setSmallRotation}
          item={model}
          size={size}
        ></IphoneModelView>

        <IphoneModelView
          index={2}
          groupRef={large}
          gsapType="view2"
          controlRef={cameraControlLarge}
          setRotatationState={setLargeRotation}
          item={model}
          size={size}
        ></IphoneModelView>

        <Canvas
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
          }}
          eventSource={document.getElementById("root")}
        >
          <View.Port></View.Port>
        </Canvas>
      </div>

      <div className={styles.closerLookSectionController}>
        <p>{model.title}</p>
        <div>
          <ul>
            {closerLookSectionModels.map((item, i) => (
              <li
                key={i}
                style={{
                  backgroundColor: item.color[0],
                  outline: model.title === item.title ? "2px solid #F5F5F7" : "none",
                }}
                onClick={() => setModel(item)}
              ></li>
            ))}
          </ul>
          <button>
            {closerLookSectionSizes.map(({ label, value }) => (
              <span
                key={label}
                style={{
                  backgroundColor: size === value ? "#F5F5F7" : "transparent",
                  color: size === value ? "black" : "#F5F5F7",
                }}
                onClick={() => setSize(value)}
              >
                {label}
              </span>
            ))}
          </button>
        </div>
      </div>
    </section>
  )
}

export default CloserLookSection