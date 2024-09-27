import ActionButtonSection from "../ActionButtonSection/ActionButtonSection"
import BatterySection from "../BatterySection/BatterySection"
import CameraSection from "../CameraSection/CameraSection"
import ChipSection from "../ChipSection/ChipSection"
import CloserLookSection from "../CloserLookSection/CloserLookSection"
import DesignSection from "../DesignSection/DesignSection"
import EcosystemSection from "../EcosystemSection/EcosystemSection"
import HighlightsSection from "../HighlightsSection/HighlightsSection"
import Ios17Section from "../Ios17Section/Ios17Section"
import Nav from "../Nav/Nav"
import SafetySection from "../SafetySection/SafetySection"
import TradeBaner from "../TradeBanner/TradeBanner"
import UsbcSection from "../UsbcSection/UsbcSection"
import ValuesSection from "../ValuesSection/ValuesSection"
import WelcomeSection from "../WelcomeSection/WelcomeSection"
import WhyAppleSection from "../WhyAppleSection/WhyAppleSection"
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
      <ValuesSection></ValuesSection>
      <Ios17Section></Ios17Section>
      <EcosystemSection></EcosystemSection>
      <WhyAppleSection></WhyAppleSection>
    </>
  )
}

export default App