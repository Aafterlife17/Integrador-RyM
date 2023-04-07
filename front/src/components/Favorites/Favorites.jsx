import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleChangeOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilterOrder = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <div>
        <select name="order" id="order" onChange={handleChangeOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" id="filter" onChange={handleFilterOrder}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        {favorites.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
