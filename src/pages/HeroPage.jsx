import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import ScollFeature from "../Components/scroll/ScrollFeature";

function HeroPage() {
  return (
    <>
      <div className="heroPage">
        <HeroHeader />
        <AboutHero />
        <ScollFeature />
        <div className="flex w-full  justify-center mb-10">
          <Link to="/image" className="btn">
            Calculate your Carbon Footprint
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HeroPage;

function HeroHeader() {
  return (
    <header className="header w-full h-[101vh] z-40">
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">EcoFootprint</span>
          <span className="heading-primary--sub">
            your personal sustainable hub
          </span>
        </h1>

        <Link to="/image" className="btn">
          Calculate your Carbon Footprint
        </Link>
      </div>
    </header>
  );
}

function AboutHero() {
  return (
    <div className="h-[250vh]  px-72 mt-[-100vh] mb-[-50vh] [view-timeline-name:--reveal-wrapper]">
      <div className="min-h-screen sticky top-0 flex items-center justify-center">
        <div>
          <p className="text-3xl reveal-text">
            Welcome to EcoFootprint, your personal sustainable hub! Our mission
            is to empower individuals to make informed decisions that reduce
            their environmental impact. Through our platform, you can calculate
            your carbon footprint, explore eco-friendly tips and practices,
            track your progress towards a greener lifestyle, and connect with
            like-minded individuals in our community.
          </p>
        </div>
      </div>
    </div>
  );
}
