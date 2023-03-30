
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


//ACTION CREATORS

export const removeFavorite = (id) => {
    return {
        type:REMOVE_FAVORITE,
        payload: id
    };
};


//Acá faltarían GETCHARACTER DETAIL y CLEAN DETAIL

//getCharacterDetail

//Desde el back nos mandan esta data: 
// const URL_BASE = "http://localhost:3001/rickandmorty"
//   fetch(`${URL_BASE}/detail/${id}`)

//cleanDetail