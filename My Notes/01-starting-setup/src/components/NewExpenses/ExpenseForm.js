import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Approach One Only State
  // const [userInput, setUserInput] = useState({
  // enteredTitle : '',
  // enteredAmount : '',
  // enteredDate : '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // One way to update state but no the best
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    // Best way to update state if i depend on a previous State
    // setUserInput( (prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   }
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });

    // setUserInput( (prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value
    //   }
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });

    // setUserInput( (prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value
    //   }
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(data);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
