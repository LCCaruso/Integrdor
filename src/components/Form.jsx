import "./Form.css";
import { useState } from "react";
import validation from "./Validation";



const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    

    return (
        <div className="contenedor">
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Escribe tu correo electrónico:</label>
            <br />
            <input type="text" name="email" placeholder="correo electrónico" value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{ color:"red" }}>{errors.email}</p>}
            <br />
            <br />
            <label htmlFor="password">Escribe tu contraseña:</label>
            <br />
            <input type="password" name="password" placeholder="contraseña" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{ color:"red" }}>{errors.password}</p>}
            <br />
            <br />
            <button>Submit</button>
        </form>
        </div>
    )
}


export default Form;