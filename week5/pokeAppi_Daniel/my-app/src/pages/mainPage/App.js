import React, {useState} from 'react'
import RandomButton from '../../components/randomButtonComponent/randomButton'
import SearchPokeByName from '../../components/searchPokeByNameComponent/searchPokeByName'
import PokeCard from '../../components/pokeCardComponent/pokeCard'
import PokeInfo from '../../components/pokeInfoComponent/pokeInfo'
import {getPokemonName, getPokemonById} from '../../services/pokemonServices'

import './styles.css'

const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [input, setInput] = useState('')

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (898))
}

  const getRandomPokemon = async () => {
    const randomNumber = await generateRandomNumber()
    const pokeInfo = await getPokemonById(randomNumber)
    console.log(pokeInfo);
    setPokemon(pokeInfo)
}

  const searchHandler = (e) => {
  setInput(e.target.value.toLowerCase())
  console.log(e.target.value);
  }

  const handleForm = async(e) => {
    e.preventDefault()
    const searchRes =  await getPokemonName(input)
    setPokemon(searchRes)
    console.log(searchRes);
  }

  return (
    <div>
      <div className = "allContainer">
        <div id = "pokedex">
        <RandomButton getRandomPokemon={getRandomPokemon}/>
          <PokeCard pokemon={pokemon} />
          <SearchPokeByName searchHandler={searchHandler} handleForm={handleForm} />
          <PokeInfo pokemon={pokemon} />
          </div>
        </div>
      </div>
  ) 
}

export default  App