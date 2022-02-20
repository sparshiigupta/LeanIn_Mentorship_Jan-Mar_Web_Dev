import classes from "./ExpensesList.module.css";
const ExpensesList = ({ list, setExpenseList }) => {
  const removeExpense = (index) => {
    const newList = list.filter((item, i) => i !== index);
    // console.log(newList);
    setExpenseList(newList);
  };
  return (
    <ul>
      {list.map((item, index) => (
        <div className={classes.container} key={item.id}>
          <li className={classes.item}>
            <span>{item.expense}</span>
            <span>₹{item.amount}</span>
            <span className={classes.date}>
              {item.day}/{item.month}/{item.year}
              <button
                className={classes.close}
                onClick={() => removeExpense(index)}
              >
                &times;
              </button>
            </span>
          </li>
        </div>
      ))}
    </ul>
  );
};
export default ExpensesList;
