import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/Context";
import { SingleTransactionStyled, List } from "./SingleTransactionStyled";

const SingleTransaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  // function to format currency
  const currency = (val, locale, currency) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(val);
  };

  // function to fdrmat date
  const date = new Date(transaction.createdAt).toISOString();
  const now = new Date(date);
  function formatDate(date, locale) {
    const calcDaysPassed = (date1, date2) =>
      Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);
    // console.log(daysPassed);

    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return new Intl.DateTimeFormat(locale, options).format(date);
  }

  return (
    <SingleTransactionStyled className="single">
      <List transactions={transaction.amount}>
        <div className="transaction-container">
          <p className="transaction-text">
          {transaction.text}
          </p>
          <p className="transaction-date">{formatDate(now)}</p>
        </div>
        <span>{currency(transaction.amount, "en-NG", "NGN")}</span>
        <button
          onClick={() => deleteTransaction(transaction._id)}
          className="delete-btn"
        >
          X
        </button>
      </List>
    </SingleTransactionStyled>
  );
};

export default SingleTransaction;
