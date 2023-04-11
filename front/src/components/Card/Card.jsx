import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { getFavorites, removeFavorite } from "../../redux/actions";
import React from "react";
import { MdFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function Card({ id, name, species, gender, image, onClose, myFavorites }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const addFavorite = async (character) => {
    await axios.post("http://localhost:3001/rickandmorty/fav", character);
    dispatch(getFavorites());
  };

  const removeFavorite = async (id) => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites());
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({ id, name, species, gender, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.cards_container}>
      <div className={style.card}>
        {isFav ? (
          <MdFavorite className={style.icon} onClick={handleFavorite} />
        ) : (
          <MdOutlineFavoriteBorder
            className={style.icon}
            onClick={handleFavorite}
          />
        )}

        <button className={style.buttonOnClick} onClick={() => onClose(id)}>
          x
        </button>

        <Link to={`/detail/${id}`}>
          <h2 className={style.nameH2}>{name}</h2>
        </Link>
        <div className={style.divTextos}>
          <h2 className={style.speciesH2}>Species: {species}</h2>
          <h2 className={style.genderH2}>Gender: {gender}</h2>
        </div>

        <img src={image} alt="" />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
