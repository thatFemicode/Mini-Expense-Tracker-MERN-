import React, { useState, useRef, useEffect, useContext } from "react";
import { BalanceStyled } from "./BalanceStyled";
import pat from "./img/pattern.png";
import ring from "./img/ring.png";
import animate, { tl } from "./animation";
import { GlobalContext } from "../../Context/Context";

const Balance = () => {
  const [watch] = useState(false);
  // const tl = gsap.timeline({ paused: true, reversed: true });
  const container = useRef(null);

  const cLogo = useRef(null);
  const logo = useRef(null);
  const balance = useRef(null);
  const name = useRef(null);
  const number = useRef(null);
  const date = useRef(null);
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions);
  useEffect(() => {
    animate(
      container.current,
      cLogo.current,
      logo.current,
      balance.current,
      name.current,
      number.current,
      date.current
    );
  }, [watch]);
  const amounts = transactions.map((transaction) => transaction.amount);

  const getTotalBalance = () => {
    return amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  };
  const currency = (val, locale, currency) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(val);
  };
  const open = () => {
    tl.play();
  };
  const close = () => {
    tl.reverse();
  };
  return (
    <BalanceStyled>
      <div
        onMouseEnter={(e) => open()}
        onMouseLeave={(e) => close()}
        ref={container}
        className="container"
      >
        <p ref={name} className="card-name">
          Balance
        </p>
        <h1 ref={balance} className="card-balance">
          {currency(getTotalBalance(), "en-NG", "NGN")}
        </h1>
        <img ref={logo} className="logo" src={ring} alt="" />
        <p ref={number} className="card-number">
          **** **** 3322
        </p>
        <p ref={date} className="due-date">
          07/25
        </p>
        <img ref={cLogo} src={pat} className="card-logo" alt="" />
      </div>
    </BalanceStyled>
  );
};

export default Balance;
