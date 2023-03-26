import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState ,action) => {
    switch(action.type){

        case ADD_FAVORITE:
            //Recordemos que el reducer pisa con un array nuevo con una copia de lo que ya tenía y un elemento nuevo, por ejemplo. El reducer no modifica el estado global haciendo esto
            
            //LE "agregamos" el payload a la variable global
            return {...state, myFavorites:[...state.myFavorites, action.payload]};


            //Busca con un filter y "remueve" el especificado a partir de su id
        case REMOVE_FAVORITE:
            return {...state, myFavorites: state.myFavorites.filter(char=>char.id !== action.payload),
            };


        default:
            return {...state};
    }
};

export default rootReducer;