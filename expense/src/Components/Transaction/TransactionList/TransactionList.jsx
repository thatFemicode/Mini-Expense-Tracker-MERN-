import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../../Context/Context";
import SingleTransaction from "../SingleTransaction/SingleTransaction";
import { TransactionListStyled } from "./TransactionListStyled";
import { gsap } from "gsap";
const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let el = useRef();
  let q = gsap.utils.selector(el);
  useEffect(() => {
    let timeline = gsap.timeline();

    // The component has been rendered, so we can now select
    // descendants of the component, including descendants
    // nested inside of other components
    timeline.fromTo(
      q(".single"),
      { opacity: 0 },
      {
        opacity: 1,
        stagger: {
          each: 0.3,
          from: 0,
          grid: "auto",
        },
      }
    );
  }, []);
  return (
    <TransactionListStyled ref={el}>
      <h3>transaction history</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <SingleTransaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </TransactionListStyled>
  );
};

export default TransactionList;
