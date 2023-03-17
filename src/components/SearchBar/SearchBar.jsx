import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar({onSearch}) {

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <nav className={style.navBar}>
      <div className={style.buttonSearch}>
        <input className={style.input} type="search" onChange={handleChange}/>
        <button className={style.button}
          onClick={() => onSearch(id)}
        >
          Agregar
        </button>
      </div>
    </nav>
  );
}
