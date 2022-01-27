import React from 'react'
import User from "./User"
import Card from "../UI/Card"
import classes from "./UserList.module.css"
const UserList = (props) => {

    return <div>
        {props.users.map(u => <User user={u}></User>)}
    </div>
}

export default UserList