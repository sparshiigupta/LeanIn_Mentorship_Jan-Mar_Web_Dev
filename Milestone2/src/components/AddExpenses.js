import Button from "./Button";
import classes from "./AddExpenses.module.css";
import { useState } from "react";
import ErrorModal from "./ErrorModal";
const AddExpenses = ({ onAddExpense }) => {
  const [enteredExpense, setEnteredExpense] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [err, setErr] = useState(null);

  const addDataHandler = (event) => {
    event.preventDefault();
    if (
      enteredExpense.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate === ""
    ) {
      setErr({ title: "ERROR", message: "OOPS ! FILL ALL FEILDS" });
      return;
    }

    if (+enteredAmount < 0) {
      setErr({ title: "ERROR", message: "Umm, AMOUNT CANNOT BE NEGATIVE" });
      return;
    }

    onAddExpense(enteredExpense, enteredAmount, enteredDate);
    console.log(enteredAmount, enteredExpense, enteredDate);
    setEnteredAmount("");
    setEnteredExpense("");
    setEnteredDate("");
  };
  const ExpenseNameHandler = (event) => {
    setEnteredExpense(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const onConfirm = () => {
    setErr(null);
  };
  return (
    <>
      {err && (
        <ErrorModal
          title={err.title}
          message={err.message}
          onConfirm={onConfirm}
        />
      )}
      <div className={classes.container}>
        <form onSubmit={addDataHandler}>
          <div className={classes.user_details}>
            <div className={classes.input_box}>
              <label htmlFor="expense">Expense</label>
              <input
                type="text"
                id="expense"
                onChange={ExpenseNameHandler}
                value={enteredExpense}
                autoComplete="off"
              ></input>
            </div>
            <div className={classes.input_box}>
              <label htmlFor="amount">Amount</label>
              <input
                type="amount"
                id="age"
                onChange={amountHandler}
                value={enteredAmount}
                autoComplete="off"
              ></input>
            </div>
            <div className={classes.input_box}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                onChange={dateHandler}
                value={enteredDate}
                autoComplete="off"
              ></input>
            </div>
          </div>
          <Button type="submit">Add Expense</Button>
        </form>
      </div>
    </>
  );
};

export default AddExpenses;
