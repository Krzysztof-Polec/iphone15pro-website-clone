import CameraSection from "../CameraSection/CameraSection"
import ChipSection from "../ChipSection/ChipSection"
import CloserLookSection from "../CloserLookSection/CloserLookSection"
import DesignSection from "../DesignSection/DesignSection"
import HighlightsSection from "../HighlightsSection/HighlightsSection"
import Nav from "../Nav/Nav"
import TradeBaner from "../TradeBanner/TradeBanner"
import WelcomeSection from "../WelcomeSection/WelcomeSection"

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
    </>
  )
}

export default App