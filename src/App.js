import React, { useState }from 'react'

import './App.css';
import AddUser from "./components/Users/AddUser"
import UserList from "./components/Users/UserList"
function App() {
  const [users, setUsers] = useState([])
  const addUser = (user) => {
      setUsers((prevUsers) => {
          return [user, ...prevUsers];
      });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUser}></AddUser>
      <UserList users = {users}></UserList>
    </div>
  );
}

export default App;
