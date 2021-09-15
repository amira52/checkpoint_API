import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './UserCard.css'
const UserCard = ({user:{username, name, id, email, phone}}) => {
    return (
<Card className="card" >
    <Link to={`/users/user/${id}`}>
    <Card.Header className="inf" style={{backgroundColor:"turquoise"}}>{id}</Card.Header>
    <Card.Body>
        <Card.Title className="nom" >{name}</Card.Title>
        <Card.Text className="text">
            <span className="usenom">{username}</span> 
            <br/>
            <span className="inf">{email}</span>
            <br/>
            <span className="inf">{phone}</span>
            
        </Card.Text>
    </Card.Body>
    </Link>
</Card>
    )
}

export default UserCard
