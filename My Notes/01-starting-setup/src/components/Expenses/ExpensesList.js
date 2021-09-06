import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.items;

  const expenseElement = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  if (expenseElement.length === 0) {
    return <h2 className="expenses-list__fallback">Found not expenses!</h2>;
  }

  return <ul className="expenses-list">{expenseElement}</ul>;
};

export default ExpensesList;
