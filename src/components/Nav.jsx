import SearchBar from "./SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom"


const Nav = ({ onSearch, random , setAccess}) => {

    const handleLogOut = () => {
        setAccess(false); 
    }

    return (
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
        <button>
            <Link to="/about">About</Link>
        </button>
        <button>
            <Link to="/home">Home</Link>
        </button>
        <button onClick={random}>Add Random</button>
        <button onClick={handleLogOut}>Log Out</button>
        </nav>
    )
}

export default Nav;