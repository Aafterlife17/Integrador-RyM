import {
  REMOVE_FAVORITE,
  GET_CHARACTER_DETAIL,
  GET_FAVORITES,
  CLEAN_DETAIL,
  FILTER,
  ORDER,
} from "./actions";

const initialState = {
  myFavorites: [],
  characterDetail: {},
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  const { allCharacters } = state;

  switch (action.type) {
    //Busca con un filter y "remueve" el especificado a partir de su id
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };

    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: [...allCharacters],
        };
      } else {
        return {
          ...state,
          myFavorites: allCharacters.filter(
            (character) => character.gender === action.payload
          ),
        };
      }

    case ORDER:
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }),
        };
      } else if (action.payload === "Descendente") {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          }),
        };
      }

    // case FILTER:
    //   const allCharacters = [...state.allCharacters];
    //   const filter = allCharacters.filter(
    //     (character) => character.gender == action.payload
    //   );
    //   return {
    //     ...state,
    //     myFavorites: filter,
    //   };

    // case ORDER:
    //   const allCharacters2 = [...state.allCharacters];
    //   let sort;
    //   if (action.payload === "Ascendente") {
    //     sort = allCharacters2.sort((a, b) => a.id - b.id);
    //   } else {
    //     sort = allCharacters2.sort((a, b) => b.id - a.id);
    //   }
    //   return {
    //     ...state,
    //     myFavorites: sort,
    //   };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
