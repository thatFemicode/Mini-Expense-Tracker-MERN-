import React, { useEffect, useRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { HomeStyled } from "./HomeStyled";
import Human from "./img/Winston.png";
import Hand from "./img/Hand.png";
import logo from "./img/slack.svg";
import anime from "animejs";

const Home = () => {
  const image = useRef(null);
  useEffect(() => {
    anime({
      targets: image.current,
      rotateY: 360,
      // keyframes: [{ rotate: 0 }, { rotate: 30 }, { rotate: 0 }],
      // translateY: 400,
      // duration: 400,
      // scale: 2,
      // easing: 'linear',
      duration: 1500,
      endDelay: 300,
      scale: 0.5,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
  }, []);
  return (
    <HomeStyled>
      <OuterLayout>
        <div className="hero">
          <div className="hero-left">
            <img src={Human} alt="human" />
          </div>
          <div className="hero-right">
            <h1 className="text express">Express</h1>
            <h1 className="text expense">Expense</h1>
            <h1 className="text tracker">Tracker</h1>
            <img className="hand" src={Hand} alt="hand" />
            <img ref={image} className="logo" src={logo} alt="hand" />
          </div>
        </div>
      </OuterLayout>
    </HomeStyled>
  );
};

export default Home;
