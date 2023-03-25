import React from 'react';
//import Searchbar from '../Search';
import styles from './style.module.css';

//import { Link } from "react-router-dom";

const Navbar = () => {
    //consumir img:
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <div className={styles.nav_linkContent}>
            <img src={imgUrl} alt="pokeapi-logo" className={styles.navbar_image} />
        </div>
    );
};


export default Navbar;