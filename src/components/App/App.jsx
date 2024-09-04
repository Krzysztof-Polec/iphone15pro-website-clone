import CloserLookSection from "../CloserLookSection/CloserLookSection"
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
    </>
  )
}

export default App