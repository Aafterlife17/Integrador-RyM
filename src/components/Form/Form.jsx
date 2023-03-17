import { useState } from "react";
import validation from "./validation";


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;


        //Acá no modificamos userData, le agregamos el valor de value a la property "property"
        setUserData({...userData, [property]:value })
        validation({...userData, [property]:value }, errors, setErrors);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                <p>{errors.username}</p>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={userData.password} onChange={handleInputChange} />
            </div>
            <button type="submit">LOG IN</button>

        </form>
    )


}

export default Form;