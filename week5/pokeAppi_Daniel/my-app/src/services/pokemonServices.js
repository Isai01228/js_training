import axios from "axios";
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const service = axios.create({ BASE_URL })

export const getPokemonById = async(pokemonId = 1) => {
    const { data } = await service.get(`${BASE_URL}/${pokemonId}`)
    return data
}

export const getPokemonName = async(pokemonName) => {
    const { data } = await service.get(`${BASE_URL}/${pokemonName}`)
    return data
}