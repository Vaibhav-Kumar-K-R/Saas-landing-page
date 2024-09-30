import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Logoticker from "./components/Logoticker"
import PricingCard from "./components/PricingCard"
import Productshowcase from "./components/Productshowcase"
import Testimonials from "./components/Testimonials"
import CallAction from "./components/CallAction"
import Footer from "./components/Footer"
function App() {
  return (
    <div>
    <NavBar></NavBar>
     <Hero></Hero>
     <Logoticker></Logoticker>
      <Productshowcase></Productshowcase>
      <PricingCard></PricingCard>
      <Testimonials></Testimonials>
      <CallAction></CallAction>
      <Footer></Footer>
    </div>
  )
}
export default App
