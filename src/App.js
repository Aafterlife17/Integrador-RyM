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

function App () {
  
//! ******** HOOKS *******
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
const [characters, setCharacters] = useState([]);
  
  
  
//! ********* ON SEARCH ***********
const onSearch = (id) => {
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const KEY = "dac1f7ac8c54.6d7aadaf056f93592c47";

  fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !characters.find((char) => char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
        // setCharacters([...characters, data]);
      } else {
        alert("Algo salió mal");
      }
    });
};


//! ********* ON CLOSE ***********
const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id));
};

//! ********* LOGIN ***********
const login = (userData) => {
  if(userData.username===username && userData.password === password){
    setAccess(true);
    navigate("/home");
  } else {
    alert("Credenciales incorrectas");
  }
};


//! ********** ROUTES *********
  return (
    <div className='App' style={{ padding: '25px' }}>
    {pathname !== "/" && <Nav onSearch={onSearch}/>}
      <div>


         <Routes>
          <Route path="/" element={<Form login={login}/>}></Route>

          <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>

          <Route path="/about" element={<About/>}/>

          <Route path="/detail/:detailID" element={<Detail/>}/>
         </Routes>
      </div>

    </div>
  )
}

export default App