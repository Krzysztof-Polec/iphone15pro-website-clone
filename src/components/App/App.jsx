import ActionButtonSection from "../ActionButtonSection/ActionButtonSection"
import BatterySection from "../BatterySection/BatterySection"
import CameraSection from "../CameraSection/CameraSection"
import ChipSection from "../ChipSection/ChipSection"
import CloserLookSection from "../CloserLookSection/CloserLookSection"
import DesignSection from "../DesignSection/DesignSection"
import HighlightsSection from "../HighlightsSection/HighlightsSection"
import Nav from "../Nav/Nav"
import SafetySection from "../SafetySection/SafetySection"
import TradeBaner from "../TradeBanner/TradeBanner"
import UsbcSection from "../UsbcSection/UsbcSection"
import WelcomeSection from "../WelcomeSection/WelcomeSection"
import Zoom5xSection from "../Zoom5xSection/Zoom5xSection"

const App = () => {
  return(
    <>
      <Nav></Nav>
      <TradeBaner></TradeBaner>
      <WelcomeSection></WelcomeSection>
      <HighlightsSection></HighlightsSection>
      <CloserLookSection></CloserLookSection>
      <DesignSection></DesignSection>
      <ChipSection></ChipSection>
      <CameraSection></CameraSection>
      <Zoom5xSection></Zoom5xSection>
      <ActionButtonSection></ActionButtonSection>
      <UsbcSection></UsbcSection>
      <BatterySection></BatterySection>
      <SafetySection></SafetySection>
    </>
  )
}

export default App