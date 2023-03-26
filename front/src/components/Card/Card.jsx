
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import {connect} from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import {useState, useEffect} from "react";



 function Card({id, name, species, gender, image, onClose,  addFavorite, removeFavorite, myFavorites}) {

    const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({id, name, species, gender, image, onClose, addFavorite, removeFavorite});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id ===  id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

    return (
        <div className={style.container}>

        {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}

            <button className={style.buttonOnClick}  onClick={()=>onClose(id)}>x</button>

            <Link to={`/detail/${id}`}>
            <h2 className={style.nameH2}>Name: {name}</h2>
            </Link>
            <div className={style.divTextos}>
                <h2 className={style.speciesH2}>Species: {species}</h2>
                <h2 className={style.genderH2}>Gender: {gender}</h2>
            </div>

            <img src={image} alt="" />

        </div>
    );
  

}


const mapDispatchToProps = (dispatch) => {
    return{
       addFavorite: (character)=>{
          dispatch(addFavorite(character))
       },
       removeFavorite: (id)=>{
          dispatch(removeFavorite(id))
       },
    };
};
 
 
const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites,
    };
};
 
 
export default connect(mapStateToProps, mapDispatchToProps)(Card);  