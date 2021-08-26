import React from 'react'
import './styles.css'
const DrawCards = ({ user }) => {
    const { name, edad, isAlive, profile } = user
    
    return ( 
        <div className={isAlive === `alive` ? `greenClass` :isAlive === `dead` ? `redClass` : `yellowClass`}>
        <h1> { name } </h1>
        <h3 > The age from user is: { edad } years </h3>
        <h2 > This person are: { isAlive } </h2>
        <img src = {profile} alt={`empty`} />
        </div>
    )
}

export default DrawCards