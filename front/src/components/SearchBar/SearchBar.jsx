import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar({onSearch}) {

    //Acá lo que hacemos es guardar el ID del personaje ingresado en el input en un estado, para que cada vez que hacemos click y se ejecute la función onSearch, este personaje se AGREGUE a este estado. Por eso también le agregamos un onChange al input para que esté atento a los cambios.

    //! ******** USE STATE ID ********
    const [id, setId] = useState("");
    
    //! ******** HANDLE CHANGE ********
    const handleChange = (event) => {
        setId(event.target.value);
      };

    return(
        <nav className={style.navBar}>
            <div className={style.buttonSearch}>
                <input className={style.input} type="search" onChange={handleChange}/>
                <button className={style.button} onClick={()=> onSearch(id)}>Agregar</button>

            </div>
        </nav>
    );
}
