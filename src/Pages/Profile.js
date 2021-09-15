import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router'
import { useState } from 'react';
import './Profile.css'

const Profile = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const {id} = useParams();
    const getUser= async () => {
        setLoading(true)
        try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/Users/${id}`);
        setUser(result.data);
        setLoading(false);
        } catch (error)  {
            setIsError(true);
            setLoading(false);
         }
    };

useEffect(()=> {getUser()},[id])

    return (
        <div>
            {loading? 
           ( <img src="https://cdn.dribbble.com/users/1698559/screenshots/3790348/___.gif" alt="load"/> 
           ) : isError? (<h1> Data Not Found </h1>): (<h2 className="iden">{user.name}</h2>)} 
           <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" className="image"/>
        </div>
    )
}

export default Profile
