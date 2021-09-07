import React from 'react'
import './styles.css'

const RandomButtom = ({getRandomPokemon}) => {

    return (
        <div>
            <div className="randomButtonContainer">
            <button  id="randomButton" type="submit" onClick={getRandomPokemon}>Random <br />Pokemon</button>
        </div>
        </div>
    )
}

export default RandomButtom
