import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/Context";
import { ExpenseStyled } from "./ExpenseStyled";
import ring from "./img/ring.png";
const Expense = () => {
  const currency = (val, locale, currency) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(val);
  };
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <ExpenseStyled>
      <div className="container">
        <p className="card-name">Expense</p>
        <h1 className="card-balance">{currency(expense, "en-NG", "NGN")}</h1>
        <img className="logo" src={ring} alt="" />
      </div>
    </ExpenseStyled>
  );
};

export default Expense;
