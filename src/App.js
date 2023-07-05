import "./App.css";
import { homeVid, images ,homeVid1,homeVid2} from "./constants";
import { useEffect, useRef } from 'react';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div className="App">
      <div className="app__video">
        <video
          ref={videoRef}
          src={homeVid}
          type="video/mp4"
          poster={images.homeVidSnap}
          loop
          muted
        />
      </div>
      <section className="hero_section">
        <h1 className="hero-text">The World is not Yours Alone!</h1>
      </section>
    </div>
  );
}

export default App;


