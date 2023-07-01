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
        <button className={style.about}>
            <Link to="/about">ABOUT</Link>
        </button>
        <button className={style.home}>
            <Link to="/home">HOME</Link>
        </button>
        <button className={style.fav}>
            <Link to="/favorites">FAVORITES</Link>
        </button>
        <div>
        <button className={style.log} onClick={handleLogOut}>Log Out</button>
        </div>
        <div>
        <button className={style.random} onClick={random}>Add Random</button>
        </div>
        </nav>
    )
}

export default Nav;