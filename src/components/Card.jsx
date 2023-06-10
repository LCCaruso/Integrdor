import style from "./Card.module.css"

export default function Card(props) {
   const {character, onClose} = props;
   return (
      <div className = {style.container}>
         <button className={style.equis} onClick={onClose}>X</button>
         <h2 className= {style.general}>Name: {character.name}</h2>
         <hr className={style.lineas}/>
         <h2 className={style.general}>Species: {character.species}</h2>
         <hr className={style.lineas}/>
         <h2 className={style.general}>Gender: {character.gender}</h2>
         <hr className={style.lineas}/>
         <img className={style.imagen} src={character.image} alt={character.image} />
      </div>
   );
}
