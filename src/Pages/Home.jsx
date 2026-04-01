import Navigation from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/howitworks";
import Features from "../components/Features";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";
import CTA from "../components/cts";


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;