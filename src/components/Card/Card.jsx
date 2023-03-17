import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.container}>
         <button className={style.buttonOnClick} onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className={style.nameH2}>Name: {name}</h2>
         </Link>
         <div className={style.divTextos}>
         <h2 className={style.speciesH2}>Species: {species}</h2>
         <h2 className={style.genderH2}>Gender: {gender}</h2>
         </div>
         <img  src={image} alt="" />
      </div>
   );
}