import React from 'react'
import './styles.css'

const SearchPokeByName = ({searchHandler, handleForm}) => {
    return (
    <div>
        <div className="formContainer" onSubmit={handleForm} >
            <form id="searchPoke" >
            <input type="text" id="inputSearch" placeholder="search your pokemon" onChange={searchHandler}/>
            <button type="submit" id="searchButton" onClick={handleForm} >Search</button>
            </form>
        </div>
    </div>
    )
}

export default SearchPokeByName
