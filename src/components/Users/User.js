import React from 'react'
import "./User.css"
import Card from "../UI/Card"
const User = (props) => {
  return (
        <Card className='user'>
          <p>Username: {props.user.username}</p>
          <div className='user__age'> age: {props.user.age}</div>
        </Card>
  );
}

export default User;