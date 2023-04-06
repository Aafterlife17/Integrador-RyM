import { ADD_FAVORITE, REMOVE_FAVORITE, GET_CHARACTER_DETAIL, GET_FAVORITES, CLEAN_DETAIL, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState ,action) => {
    switch(action.type){

        case ADD_FAVORITE:
            //Recordemos que el reducer pisa con un array nuevo con una copia de lo que ya tenía y un elemento nuevo, por ejemplo. El reducer no modifica el estado global haciendo esto
            
            //LE "agregamos" el payload a la variable global
            return {
                ...state, 
                myFavorites:[...state.allCharacters, action.payload],
                allCharacters:[...state.allCharacters, action.payload]
            };


            //Busca con un filter y "remueve" el especificado a partir de su id
        case REMOVE_FAVORITE:
            return {
                ...state, 
                myFavorites: state.myFavorites.filter(char=>char.id !== action.payload),
            };

        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload,
            };

        case FILTER:
            const allCharacters = [...state.allCharacters];
            const filter = allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: filter
            };

        case ORDER:
            const allCharacters2 = [...state.allCharacters];
            let sort;
            if(action.payload == "Ascendente"){
                sort = allCharacters2.sort((a,b) => a.id - b.id);
            } else {
                sort = allCharacters2.sort((a,b) => b.id - a.id);
            }
            return {
                ...state,
                myFavorites: sort
            }
          
        case CLEAN_DETAIL:
            return {
                ...state,
                characterDetail: {},
            };        
            
        case GET_FAVORITES:
            return {
                 ...state, 
                 myFavorites: action.payload 
                };

        default:
            return {
                ...state
            };
    }
};

export default rootReducer;