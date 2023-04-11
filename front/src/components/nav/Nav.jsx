import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.divNav}>
        <div className={style.links}>
          <Link to="/home" className={style.link}>
            <h4 className={style.link_h4}>Home</h4>
          </Link>
          <Link to="/about" className={style.link}>
            <h4 className={style.link_h4}>About me</h4>
          </Link>
          <Link to="/favorites" className={style.link}>
            <h4 className={style.link_h4}>Favorites</h4>
          </Link>
        </div>
        <div className={style.searchBar}>
          <SearchBar onSearch={this.props.onSearch} />
        </div>
      </div>
    );
  }
}

export default Nav;
