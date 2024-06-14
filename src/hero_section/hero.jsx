import Nav from "../header/nav";
import HeroLeft from "./left_hero";
import RightHero from "./right";
import Footer from "../Footer/Footer";
function Hero() {
    return(
      <>
      <Nav/>
        <div className="hero">
          <HeroLeft/>
          <RightHero/>
        </div>
        <Footer/>
      </>
    )
}
export default Hero;