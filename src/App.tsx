import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import VideoSection from "./components/VideoPlayer";
import about from "./assets/about.mp4";
import { useState } from "react";
import GetInvolved from "./components/GetInvolved";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <div style={{ background: "#faf5ef" }}>
      <Navbar />
      <Hero />
      <Events />
      <About setFullScreen={setIsFullScreen}/>
      <GetInvolved />
      <Contact />
      <ScrollToTop />
      <Footer />
      <VideoSection about={about} isFullScreen={isFullScreen} setFullScreen={setIsFullScreen} />
      <Toaster />
    </div>
  );
};

export default App;
