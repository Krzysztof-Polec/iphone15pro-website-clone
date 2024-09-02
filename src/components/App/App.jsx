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
    </>
  )
}

export default App