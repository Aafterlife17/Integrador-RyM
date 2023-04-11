import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
import { RiAliensFill } from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  //! ********* ON CHANGE/HANDLE INPUT CHANGE ********
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    //Acá no modificamos userData, le agregamos el valor de value a la property "property"
    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  //! ********* SUBMIT HANDLER ********
  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className="html_app">
      <form onSubmit={submitHandler}>
        <div className={style.login}>
          <div className={style.input_div}>
            <div className={style.input_icon}>
              {/* <label className={style.label} htmlFor="username">
            User
          </label> */}
              <RiAliensFill className={style.icon} />
              <input
                type="text"
                name="username"
                value={userData.username}
                className={style.login_input}
                onChange={handleInputChange}
                placeholder="user@mail.com"
              />
            </div>
            <p className={style.error}>{errors.username}</p>
          </div>

          <div className={style.input_div}>
            {/* <label className={style.label} htmlFor="password">
            Password
          </label> */}
            <div className={style.input_icon}>
              <FaUnlockAlt className={style.icon2} />
              <input
                type="text"
                name="password"
                value={userData.password}
                className={style.login_input}
                onChange={handleInputChange}
                placeholder="user123"
              />
            </div>
            <p className={style.error}>{errors.password}</p>
          </div>
          <button className={style.login_submit} type="submit">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
