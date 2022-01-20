import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/Context";
import { IncomeStyled } from "./IncomeStyled";

const Income = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
    .toString()
    .replace(".", ",");
  return <IncomeStyled></IncomeStyled>;
};

export default Income;
