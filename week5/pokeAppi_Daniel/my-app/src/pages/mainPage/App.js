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
      <div className="pokedex">
        <div id="prueba">
          <button id="randomButton" type="submit" onClick={getRandomPokemon}>Random</button>
        </div>
        <div>
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

export default  App