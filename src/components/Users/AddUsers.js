import React, {useState} from 'react';
 import Card from '../Ui/Card'
 import classes from './AddUser.module.css'
 import Button from '../Ui/Button'
 import ErrorModal from '../Ui/ErrorModal'
const AddUsers=props=>{
    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState()

    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value)
      
    }
    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value)
    }
    const addUserHandler=(event)=>{
        event.preventDefault()
        if(enteredUsername.trim().length===0||enteredAge.trim().length===0){
            setError({
                title:'nothing added',
                message:'please enter non empty values'
            })
            return;
        }
        if(+enteredAge<1){
            setError({
                title:'invalid age',
                message:'age can not be negative'
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }
    const errorHandler=()=>{
        setError(null)
    }
 return <div>
 {error&&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
 <Card className={classes.input}> <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input id= "username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
    <label htmlFor="age">Age</label>
    <input id="age" type="number" value={enteredAge}onChange={ageChangeHandler}></input>
    <Button type="submit">AddUser</Button>
</form></Card></div>
};
export default AddUsers;