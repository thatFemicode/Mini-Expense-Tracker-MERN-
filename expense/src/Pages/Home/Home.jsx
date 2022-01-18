import React, { useEffect, useRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { HomeStyled } from "./HomeStyled";
import Human from "./img/Winston.png";
import Hand from "./img/Hand.png";
import logo from "./img/slack.svg";
import anime from "animejs";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
const Home = () => {
  const image = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const human = useRef(null);
  const link = useRef(null);
  const hand = useRef(null);
  const tl = gsap.timeline();
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
  useEffect(() => {
    tl.from(human.current, {
      duration: 2,
      opacity: 0,
      y: 200,
      ease: "power3.inOut",
    })
      .fromTo(
        text1.current,
        { opacity: 0, x: 200, skewY: 10, ease: "power3.inOut" },
        { duration: 2, x: 0, opacity: 1, skewY: 0 },
        "-=1"
      )
      .fromTo(
        text2.current,
        {
          opacity: 0,
          x: -200,
          skewY: 10,
          ease: "power3.inOut",
        },
        { duration: 2, x: 0, opacity: 1, skewY: 0 },
        "-=1"
      )
      .fromTo(
        text3.current,
        {
          opacity: 0,
          x: 200,
          skewY: 10,
          ease: "power3.inOut",
        },
        { duration: 2, x: 0, opacity: 1, skewY: 0 },
        "-=1"
      )
      .from(
        link.current,
        {
          duration: 2,
          opacity: 0,
          x: 200,
          skewY: 10,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .from(
        hand.current,
        {
          duration: 2,
          opacity: 0,
          y: 200,
          skewY: 10,
          ease: "power3.inOut",
        },
        "-=1"
      );
  }, []);
  return (
    <HomeStyled>
      <OuterLayout>
        <div className="hero">
          <div className="hero-left">
            <img ref={human} src={Human} alt="human" />
          </div>
          <div className="hero-right">
            <h1 ref={text1} className="text express">
              Express
            </h1>
            <h1 ref={text2} className="text expense">
              Expense
            </h1>
            <h1 ref={text3} className="text tracker">
              Tracker
            </h1>
            <img ref={hand} className="hand" src={Hand} alt="hand" />
            <img ref={image} className="logo" src={logo} alt="hand" />
            <Link ref={link} to="/dashboard">
              <span className="view">View Dashboard</span>
              <span className="track">Track your expenses today</span>
            </Link>
          </div>
        </div>
      </OuterLayout>
    </HomeStyled>
  );
};

export default Home;
