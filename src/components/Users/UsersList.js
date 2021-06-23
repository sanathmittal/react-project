import React from "react";
import classes from "./UsersList.module.css";
import Card from "../Ui/Card";
const UsersList = (props) => {
  return (
    <div className={classes.users}>
    
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old) 
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersList;
