import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions";
import { useEffect } from "react";

function Cards({ characters, onClose }) {
  // PARA VER LOS FAVORITOS PINTADOS EN LA HOME
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <div className={style.cards}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}

export default Cards;
