import style from "./SearchBar.module.css"
export default function SearchBar(props) {
   const {onSearch} = props;

   return (
      <div className={style.search}>
         <input className={style.input} type='search' />
         <button className={style.boton} onClick={onSearch}>Agregar</button>
      </div>
   );
}
