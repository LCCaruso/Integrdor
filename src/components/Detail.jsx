import axios from "axios";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return(
        <div>
        <button className={style.back}>
        <Link to="/home">BACK</Link>
        </button>    
        <div className={style.info}> 
            <h2>Name: {character?.name}</h2>
            <h2>Status: {character?.status}</h2>
            <h2>Specie: {character?.species}</h2>
            <h2>Gender: {character?.gender}</h2>
            <h2>Origin: {character?.origin?.name}</h2>
        </div>
            <img className={style.image2} src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;