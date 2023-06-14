import style from "./Card.module.css"

export default function Card(props) {
   const {character, onClose} = props;
   return (
       <div className={style.container}>
            <button className={style.botonx} onClick={() => onClose(character.id)}>x</button>
            <h2>Id: {character.id}</h2>
            <hr className={style.lineas}/>
            <h2>Name: {character.name}</h2>
            <hr className={style.lineas}/>
            <h2>Species: {character.species}</h2>
            <hr className={style.lineas}/>
            <h2>Gender: {character.gender}</h2> 
            <img className={style.imagen} src={character.image} alt={character.image} />
       </div>
   );
}
