import { Suspense } from "react"
import * as THREE from "three"
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import { isDesktop } from "react-device-detect"
import Lights from "../../utils/Lights"
import IPhone from "../../models/IPhone"
import IPhoneModelLoader from "../IPhoneModelLoader/IPhoneModelLoader"
import styles from "./IphoneModelView.module.scss"

const IphoneModelView = ({ index, groupRef, gsapType, controlRef, setRotatationState, item, size }) => {
  return(
    <View
      index={index}
      id={gsapType}
      className={styles.iphoneView}
    >
      <ambientLight intensity={0.3}></ambientLight>
      <PerspectiveCamera makeDefault position={[0, 0, 3]}></PerspectiveCamera>
      <Lights></Lights>
      {isDesktop && (
        <OrbitControls
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setRotatationState(controlRef.current.getAzimuthalAngle())}
        ></OrbitControls>
      )}
      <group ref={groupRef} name={`${index === 1 ? "small" : "large"}`} position={[0, 0, 0]}>
        <Suspense fallback={<IPhoneModelLoader></IPhoneModelLoader>}>
          <IPhone scale={index === 1 ? [13, 13, 13] : [15, 15, 15]} item={item} size={size}></IPhone>
        </Suspense>
      </group>
    </View>
  )
}

export default IphoneModelView