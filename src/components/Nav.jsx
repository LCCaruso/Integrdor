import SearchBar from "./SearchBar";
import style from "./Nav.module.css"


const Nav = ({ onSearch }) => {

    return (
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;