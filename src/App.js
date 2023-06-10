import './App.css';
import style from "./App.module.css"

import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
   function searchHandler (){
      window.alert("El ID que estoy buscando");
   }

   function closeHandler (){
      window.alert("Emulamos que se cierra la card");
   }

   return (
      <div className='App'>
            <h1 className={style.titulo}>Rick & Morty</h1>
            <img className={style.imagentitulo} src="https://static.posters.cz/image/hp/66133.jpg"></img>
         <SearchBar onSearch={searchHandler} />
         <Cards characters={characters} onClose={closeHandler} />
      </div>
   );
}

export default App;
