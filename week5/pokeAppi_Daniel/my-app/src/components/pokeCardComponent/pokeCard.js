import React from 'react'
import './styles.css'

const PokeCard = ({pokemon}) => {
    return (
        <div>
        <div className="pokeCardContainer">
        <div id = "pokeCard">
        {
        pokemon.id && (
            <div className="pokeCard">
            <h1 id="pokeName" > {pokemon.name} - {pokemon.id} </h1>
            <img src={pokemon.sprites.front_default} alt=""/>
            </div>
            )
        }
        </div>
        </div>
        </div>
    )
}

export default PokeCard
