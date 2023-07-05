import './intro.css'
import React from 'react'
import { useRef,useEffect } from 'react';
import { homeVid,images } from '../../constants';

const Intro = () => {
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
  )
}

export default Intro