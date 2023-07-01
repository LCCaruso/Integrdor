import style from "./SearchBar.module.css"
import { useState } from "react";



export default function SearchBar(props) {
   const {onSearch} = props;

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   
   }

   return (
      <div className={style.container}>
         <input className={style.input} type='search' onChange={handleChange} value={id}/>
         <button placeholder="id" className={style.boton} onClick={() => {onSearch(id); setId("")}}>Add ID</button>
      </div>
   );
}
