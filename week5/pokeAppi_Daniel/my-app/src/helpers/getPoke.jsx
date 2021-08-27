export const getPokemonById = async(pokemonId = 1) => {
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    const resp = await fetch(baseURL)
    const data = await resp.json()
    return data
}