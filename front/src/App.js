import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/nav/Nav.jsx'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/detail'
import Form from './components/Form/Form'
import { useLocation } from 'react-router-dom'
import Favorites from './components/Favorites/Favorites'
import SearchBar from './components/SearchBar/SearchBar'

function App () {

    //! ******* HOOKS ******
    const {pathname} = useLocation();
    const [access, setAccess] = useState(false);
    const navigate = useNavigate();

    //! ******* USE EFFECT *******  
    useEffect(() => {
        !access && navigate("/");
    }, [access]);

    //! CREDENCIALES FAKE
    const username = "nmalvicino@mail.com";
    const password = "mipass123";

    //! ********* LOGIN ***********
    const login = (userData) => {
        if(userData.username===username && userData.password === password){
        setAccess(true);
        navigate("/home");
        } else {
        alert("Credenciales incorrectas");
        }
    };

    //! ******* USE STATE CHARACTERS ******
    const [characters, setCharacters] = useState([]);
    
    
    //! ******* ON SEARCH ******
    const onSearch = (id) => {
        const URL_BASE = "http://localhost:3001";
        // const KEY = "dac1f7ac8c54.6d7aadaf056f93592c47"
        
        if(characters.find((char) => char.id === id)){
            return alert("Personaje repetido!");
        }

        fetch(`${URL_BASE}/onsearch/${id}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
    }
    
    //! ******* ON CLOSE ******
    const onClose = (id) => {
        setCharacters(characters.filter((char) => char.id !== id));
    };
    
    
    //! ******* ROUTING ******
    return(
        <div className='App' style={{ padding: "25px" }}>
            {pathname !== "/" &&<Nav onSearch={onSearch}/>}
            
            <div>
            <Routes>
                <Route path="/" element={<Form login={login}/>}/>
                <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/detail/:detailID" element={<Detail/>}/>

               
            </Routes>

            </div>

        </div>
    );

}

export default App
