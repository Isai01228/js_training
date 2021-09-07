import React from 'react'
import './styles.css'

const PokeInfo = ({pokemon}) => {
    return (
        <div>
        <div className="infoContainer">
        <div className="types">
        {
            pokemon.id && (
                pokemon.types.map((type, i)=> (
                    <div key={i}> 
                        <h3>| {type.type.name} | </h3> 
                    </div>
                    ))
            )
        }
        </div>
        <div className="stats">
        {
            pokemon.id && (
                pokemon.stats.map((el,i) => (
                    <div key={i}>
                        <h1> | {el.stat.name}: {el.base_stat} | </h1>
                    </div>
                    ))
            )
        }
        </div>
        </div>
        </div>
    )
}

export default PokeInfo
