import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

const email = "lucas@gmail.com";
const password = "123asd";

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate("/")
   }, [access])

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

   function randomHandler (){
      let haveIt = [];
      let random = (Math.random() * 826).toFixed();
      random = Number(random);
      if(!haveIt.includes(random)) {
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then((response) => response.json())
         .then((data) => {
            if(data.name){
               setCharacters((oldChars) => [...oldChars, data]);

            }else {
               window.alert("No hay personajes con ese ID")
            }
         });
      }else{
         console.log("Ya agregaste todos los personajes");
         return false;
      }
   }

   
   return (
      <div>
            <div className='titulo'> 
            {
               location.pathname !== "/" && <Nav onSearch={onSearch} random={randomHandler}/>
            }
            <h1 className='letra'>Rick & Morty</h1>
            </div>
            
            <Routes>
               <Route path="/home" element= {
               <div className='primer'>
               <Cards characters={characters} onClose={onClose} />
               </div>
               }/>
               <Route path="/" element={<Form login={login}/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
      </div>
   );
}

export default App;
