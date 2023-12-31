import Card from './Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const {characters, onClose} = props;
   
   return (
   <div className={style.container}>
      {characters.map((character) => (
         <Card key= {character.id} character={character} onClose={onClose} />
      ))}
      </div>
   );
}
