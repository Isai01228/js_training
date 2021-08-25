import React from 'react'

const DrawCards = ({user}) => {

const {name, edad, isAlive, profile} = user

    return (
        <div>
            <h1> {name} </h1>
            <h3> The age from user is: {edad} </h3>
            <h2>this person is: {isAlive} </h2>
            <p> {profile} </p>
        </div>
    )
}

export default DrawCards