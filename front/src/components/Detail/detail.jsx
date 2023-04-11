import useCharacter from "../../hooks/useCharacter";
import style from "./Detail.module.css";

const Detail = () => {
  const character = useCharacter();

  return (
    <div className={style.container}>
      {/* Acá le vamos a decir lo siguiente. character.name existe? si existe, mostrame esto (y ahí la info) Si no existe, mostrame loading */}
      {character.name ? (
        <>
          <h2 className={style.name}>{character.name}</h2>
          <p className={style.datos}>{character.status}</p>
          <p className={style.datos}>{character.species}</p>
          <p className={style.datos}>{character.gender}</p>
          {/* Acá le decimos que espere hasta que la info de origin esté disponible, porque a veces axios tarda mucho */}
          <p className={style.datos}>{character.origin?.name}</p>
          <img className={style.imagen} src={character.image} alt="img" />
        </>
      ) : (
        <img
          src="https://cdna.artstation.com/p/assets/images/images/031/538/850/original/petro-kosariekov-portal-gun-rick-and-morty2-2.gif?1603902186"
          alt=""
        ></img>
      )}
    </div>
  );
};

export default Detail;
