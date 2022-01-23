import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/Context";
import { IncomeStyled } from "./IncomeStyled";
import ring from "./img/ring.png";
const Income = () => {
  const currency = (val, locale, currency) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(val);
  };
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <IncomeStyled>
      <div className="container">
        <p className="card-name">Income</p>
        <h1 className="card-balance">{currency(income, "en-NG", "NGN")}</h1>
        <img className="logo" src={ring} alt="" />
      </div>
    </IncomeStyled>
  );
};

export default Income;
