import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
   const {character, onClose, addFav, removeFav, myFavorites} = props;

    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        if(isFav) {
            setIsFav(false);
            removeFav(character.id);
        }
        else{
            setIsFav(true);
            addFav(character);
        }

    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
           if (fav.id === props.id) {
              setIsFav(true);
           }
        });
     }, [myFavorites]);

   return (
        
        <div>
        <div> 
            <button className={style.favoritos} onClick={handleFavorite}>{isFav ? "❤️" : "🤍" }</button>
        </div>
            <br/>
        <div>
            <button className={style.botonx} onClick={() => onClose(character.id)}>x</button>
        </div>
        <div className={style.container}>
            <h2>Id: {character.id}</h2>
            <hr className={style.lineas}/>
            <Link to={`/detail/${character.id}`}>
            <h2>{character.name}</h2>
            </Link>
            {/* <hr className={style.lineas}/> */}
            {/* <h2>Species: {character.species}</h2>
            <hr className={style.lineas}/>
            <h2>Gender: {character.gender}</h2>  */}
            <img className={style.imagen} src={character.image} alt={character.image} />
        </div>
            
       </div>
   );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => { dispatch(addFav(character)) },
        removeFav: (id) => { dispatch(removeFav(id)) }
    }
}


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Card);