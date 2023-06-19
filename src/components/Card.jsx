import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   const {character, onClose} = props;
   return (
        <div>
            <br/>
        <div>
            <button className={style.botonx} onClick={() => onClose(character.id)}>x</button>
        </div>
        <div className={style.container}>
            <h2>Id: {character.id}</h2>
            <hr className={style.lineas}/>
            <Link to={`/detail/${character.id}`}>
            <h2>Name: {character.name}</h2>
            </Link>
            <hr className={style.lineas}/>
            <h2>Species: {character.species}</h2>
            <hr className={style.lineas}/>
            <h2>Gender: {character.gender}</h2> 
            <img className={style.imagen} src={character.image} alt={character.image} />
        </div>
            
       </div>
   );
}
