import AddUsers from "./components/users/AddUsers";
import UsersList from "./components/users/UsersList";
import { useState } from "react";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (username, userage) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList list={userList} />
    </>
  );
}

export default App;
