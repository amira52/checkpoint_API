import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import UserCard from '../Components/UserCard';


const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  useEffect(()=>{
  getUsers();},[]);

  const getUsers = async () => {
    setLoading(true)
    try {
     let result = await axios.get("https://jsonplaceholder.typicode.com/Users")
      setUsers(result.data);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false)  ;
    }
};


    return (
        <div style={{display:"flex", flexWrap:"wrap", marginLeft:"20%", marginRight:"20%"}}>
           {loading? 
           (<h1> Wait please </h1>
           ) : isError? (<h1> Data Not Found </h1>): (
           users.map((el) => <UserCard user={el} key={el.id}/>))} 
        </div>
    )
}

export default UsersList
