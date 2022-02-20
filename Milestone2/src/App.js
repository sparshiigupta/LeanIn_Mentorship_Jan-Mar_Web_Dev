import AddExpenses from "./components/AddExpenses";
import ExpensesList from "./components/ExpensesList";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { filterItems } from "./components/Filter";
import Header from "./components/Header";
const App = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [query, setQuery] = useState("");
  const [moneySpent, setMoneySpent] = useState(0);
  const results = filterItems(expenseList, query);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < expenseList.length; i++)
      temp += parseInt(expenseList[i].amount);

    setMoneySpent(temp);
  }, [expenseList]);
  const addExpenseHandler = (enteredExpense, enteredAmount, enteredDate) => {
    let dtArray = enteredDate.split("-");

    let dtYear = dtArray[0];
    let dtMonth = dtArray[1];
    let dtDay = dtArray[2];
    setExpenseList((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random().toString(),
          expense: enteredExpense,
          amount: enteredAmount,
          year: dtYear,
          month: dtMonth,
          day: dtDay,
        },
      ];
    });
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Header moneySpent={moneySpent} />
      <SearchBar query={query} onChange={handleChange} />
      <AddExpenses onAddExpense={addExpenseHandler} />
      <ExpensesList
        list={query === "" ? expenseList : results}
        setExpenseList={setExpenseList}
      />
    </>
  );
};

export default App;
