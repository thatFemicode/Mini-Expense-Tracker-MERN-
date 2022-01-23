import React, { useEffect, useRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { HomeStyled } from "./HomeStyled";
import Human from "./img/Winston.png";
import Hand from "./img/Hand.png";
import logo from "./img/slack.svg";
import anime from "animejs";
import { Link } from "react-router-dom";

import animate from "./animation";

const Home = () => {
  let image = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let human = useRef(null);
  let link = useRef(null);
  let hand = useRef(null);
  let demo = useRef(null);

  useEffect(() => {
    anime({
      targets: image.current,
      rotateY: 360,

      duration: 1500,
      endDelay: 300,
      scale: 0.5,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
  }, []);
  useEffect(() => {
    animate(human, text1, text2, text3, link, hand, demo);
  }, []);
  return (
    <HomeStyled ref={(el) => (demo = el)}>
      <OuterLayout>
        <div className="hero">
          <div className="hero-left">
            <img ref={(el) => (human = el)} src={Human} alt="human" />
          </div>
          <div className="hero-right">
            <h1 ref={(el) => (text1 = el)} className="text express">
              Express
            </h1>
            <h1 ref={(el) => (text2 = el)} className="text expense">
              Expense
            </h1>
            <h1 ref={(el) => (text3 = el)} className="text tracker">
              Tracker
            </h1>
            <img
              ref={(el) => (hand = el)}
              className="hand"
              src={Hand}
              alt="hand"
            />
            <Link ref={(el) => (link = el)} to="/dashboard">
              <span className="view">View Dashboard</span>
              <span className="track">Track your expenses today</span>
            </Link>
          </div>
        </div>
        <div className="scroll">
          <img ref={image} src={logo} alt="75anniversary" />
        </div>
      </OuterLayout>
    </HomeStyled>
  );
};

export default Home;
