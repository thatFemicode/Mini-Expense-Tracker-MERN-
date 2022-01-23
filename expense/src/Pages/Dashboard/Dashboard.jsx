import React from "react";
import Balance from "../../Components/Balance/Balance";
import Expense from "../../Components/Income-Expense/Expense/Expense";
import Income from "../../Components/Income-Expense/Income/Income";
import AddTransaction from "../../Components/Transaction/AddTransaction/AddTransaction";
import TransactionList from "../../Components/Transaction/TransactionList/TransactionList";
import { OuterLayout } from "../../Layout/Layout";
import { DashBoardStyled } from "./DashBoardStyled";

const Dashboard = () => {
  return (
    <DashBoardStyled>
      <OuterLayout>
        <div className="dashboard">
          <div className="sidebar">
            <Balance />
            <div className="inc-exp">
              <Income />
              <Expense />
            </div>
            <AddTransaction />
          </div>
          <div className="mainbar">
            <TransactionList />
          </div>
        </div>
      </OuterLayout>
    </DashBoardStyled>
  );
};

export default Dashboard;
