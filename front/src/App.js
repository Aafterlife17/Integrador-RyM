import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/nav/Nav.jsx'
import { useEffect, useState } from 'react'
import characters from './data.js'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/detail'
import Form from './components/Form/Form'
import { useLocation } from 'react-router-dom'
import Favorites from './components/Favorites/Favorites'
import SearchBar from './components/SearchBar/SearchBar'

function App () {

    // const onClose = (id) => {
    //     setCharacters(characters.filter((char) => char.id !== id));
    // };
    
    return(
        <div className='App' style={{ padding: "25px" }}>

            <div>
                <SearchBar onSearch={(characterID) => window.alert(characterID)}/>
            </div>

            <div>
                <Cards characters={characters} onClose={()=>window.alert("Emulamos que se cierra la card")}></Cards>
            </div>

        </div>
    );

}

export default App
