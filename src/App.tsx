import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/EventHighlights";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import VideoSection from "./components/VideoPlayer";
import about from "./assets/about.mp4";
import { useEffect, useState } from "react";
import GetInvolved from "./components/GetInvolved";
import { Toaster } from "./components/ui/toaster";
import UpcomingEvent from "./components/UpcomingEvent";
import AnnouncementBar from "./components/AnnouncementBar";
import { fetchUpcomingEvent } from "./event-data";
import { SanityUpcomingEventType } from "./sanityTypes";

const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [event, setEvent] = useState<SanityUpcomingEventType | null>(null);

  useEffect(() => {
    fetchUpcomingEvent()
      .then((res) => {
        setEvent(res ?? null);
      })
      .catch((err) => {
        console.error("Error fetching: ", err);
      });
  }, []);

  return (
    <div style={{ background: "#faf5ef" }}>
      <Navbar />
      {event?.bannerMessage && (
        <AnnouncementBar bannerMessage={event.bannerMessage} />
      )}
      <Hero />
      <UpcomingEvent event={event} />
      <Events />
      <About setFullScreen={setIsFullScreen} />
      <GetInvolved />
      <Contact />
      <ScrollToTop />
      <Footer />
      <VideoSection
        about={about}
        isFullScreen={isFullScreen}
        setFullScreen={setIsFullScreen}
      />
      <Toaster />
    </div>
  );
};

export default App;
