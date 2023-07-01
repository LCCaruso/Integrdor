import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],

}

// el reducer recibe dos parametros, state=initialState, y action. en action se hace destructuring 
// en {type, payload}) que son las dos propiedades que tiene action. y el switch recibe la propiedad type, de action
const reducer = (state = initialState, {type, payload}) => {     
    switch(type){
        case ADD_FAV: 
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        default: 
            return {...state}
    }
}


export default reducer;