import useCharacter from "../../hooks/useCharacter";

const Detail = () => {
  const character = useCharacter();

  return (
    <div>
      {/* Acá le vamos a decir lo siguiente. character.name existe? si existe, mostrame esto (y ahí la info) Si no existe, mostrame loading */}
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          {/* Acá le decimos que espere hasta que la info de origin esté disponible, porque a veces axios tarda mucho */}
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
