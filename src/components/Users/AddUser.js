import React, { useState } from 'react'

import Card from "../UI/Card"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import classes from "./AddUser.module.css"

const AddUser = (props) => {
    const [user, setUser] = useState({ username: "", age: "" })

    const [error, setError] = useState()

    const handleAddUser = (e) => {
        e.preventDefault();
        if (user.username.trim().length === 0) {
            setError({ title: "Invalid Username", message: "Username cannot be null" })
            return;
        }
        if (user.age.trim().length === 0 ||
            +user.age < 1) {
            setError({ title: "Invalid Age", message: "Age cannot be null or less than 1" })  
            return;
        }
        const userData = {
            username: user.username,
            age: user.age,
        };
        props.onAddUser(userData)
        console.log("done")
        setUser({ username: "", age: "" })

    }
    const handleChange = (e) => {
        const { id, value } = e.target
        setUser(
            prevState => ({ ...prevState, [id]: value }))
    }
    const handleError= () => {
        setError(null);
      };
    return (
        <div>
        {error && <Modal title={error.title} message={error.message} onConfirm={handleError}> </Modal>}
        <Card className={classes.input}>
            <form onSubmit={handleAddUser}>
                <label htmlFor="username"> Username:</label>
                <input type="text" id="username"
                    value={user.username}
                    onChange={handleChange}></input>
                <label htmlFor="age"> Age:</label>
                <input type="number" id="age"
                    value={user.age}
                    onChange={handleChange}></input>
                <Button type="submit">Add User</Button>
            </form>

        </Card>
     </div>
    )
}

export default AddUser