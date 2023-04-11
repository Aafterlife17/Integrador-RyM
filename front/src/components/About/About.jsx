import React from "react";
import style from "./About.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.divAbout}>
        <h1>¡Hola! Soy Natalia.</h1>
        <h3>Podés encontrarme acá:</h3>
        <div className={style.icons}>
          <a href="https://www.instagram.com/aafterlife17/" target="_blank">
            <AiFillInstagram className={style.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/nataliamalvicino/"
            target="_blank"
          >
            <AiFillLinkedin className={style.icon} />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
