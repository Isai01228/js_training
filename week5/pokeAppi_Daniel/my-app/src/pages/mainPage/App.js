import React, {useState} from 'react'
import {getPokemonById} from '../../helpers/getPoke'

import './styles.css'

const App = () => {
  const [pokemon, setPokemon] = useState('')

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (800))
  }

  const getRandomPokemon = async () => {
    const randomNumber = await generateRandomNumber()
    const pokeInfo = await getPokemonById(randomNumber)
    console.log(pokeInfo);
    setPokemon(pokeInfo)
  }

  return (
    <div>
      <div className = "allContainer">
        <div id = "pokedex">
          <div className="randomButtonContainer">
            <button  id="randomButton" type="submit" onClick={getRandomPokemon}>Random <br />Pokemon</button>
          </div>
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
          <div className="inputcontainer">
          <input type="text" />
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default  App