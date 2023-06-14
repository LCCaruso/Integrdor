import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from "axios";


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      const charactersFiltered = characters.filter( character =>
         character.id !== Number(id))
         setCharacters(charactersFiltered)
   }

   function searchHandler (){
      window.alert("El ID que estoy buscando");
   }

   function closeHandler (){
      window.alert("Emulamos que se cierra la card");
   }

   return (
      <div>
            <div className='titulo'>
            <h1 className='letra'>Rick & Morty</h1>
            </div>
            <Nav onSearch={onSearch}/>
            <div className='primer'>
            <Cards characters={characters} onClose={onClose} />
            </div>
      </div>
   );
}

export default App;
