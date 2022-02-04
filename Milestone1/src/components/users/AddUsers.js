import Card from "../UI/Card";
import Button from "./Button";
import classes from "./AddUsers.module.css";
import { useState } from "react";

const AddUsers = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addDataHandler = (event) => {
    event.preventDefault();

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      alert("PLEASE FILL ALL THE FIELDS");
      return;
    }

    if (+enteredAge < 0) {
      alert("AGE CANNOT BE NEGATIVE");
      return;
    }

    // console.log(enteredUser);
    // console.log(enteredAge);
    props.onAddUser(enteredUser, enteredAge);
    setEnteredAge("");
    setEnteredUser("");
  };
  const usernameHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addDataHandler}>
        <div className={classes.user_details}>
          <div className={classes.input_box}>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              id="username"
              onChange={usernameHandler}
              value={enteredUser}
              autoComplete="off"
            ></input>
          </div>
          <div className={classes.input_box}>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              onChange={ageHandler}
              value={enteredAge}
              autoComplete="off"
            ></input>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
