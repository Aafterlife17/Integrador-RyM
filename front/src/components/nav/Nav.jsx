import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"

class Nav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
                <Link to="/about"><h4>Sobre Mí</h4></Link>
                <Link to="/home"><h4>Home</h4></Link>
                <Link to="/favorites"><h4>Favoritos</h4></Link>
            </div>
        );
    };
};


export default Nav;