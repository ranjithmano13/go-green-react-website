import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero_section">
      <h1 className="hero-text">The World is not Yours Alone!</h1>
      <h2 className="hero-sub">Go Green</h2>
      <div className="hero-quote">
        <p>
          Don't waste electricity; don't waste paper; don't waste food. Live the
          way you want to live but just don't waste. Look after the natural
          world and the animals in it and the plants in it too. This is their
          planet as well as ours.
        </p>
        <h3>Sir David Attenborough.</h3>
      </div>
    </section>
  );
};

export default Hero;
