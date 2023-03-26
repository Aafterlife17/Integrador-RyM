import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar({onSearch}) {

    
    return(
        <nav className={style.navBar}>
            <div className={style.buttonSearch}>
                <input className={style.input} type="search"/>
                <button className={style.button} onClick={(id)=> onSearch(id)}>Agregar</button>

            </div>
        </nav>
    );
}
