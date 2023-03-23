import React from 'react';
import Searchbar from '../Search';
import styles from './style.module.css';

export const Navbar = () => {
    //consumir img:
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"


    return (
        <nav>
            <img src={imgUrl} alt="pokeapi-logo" className={styles.navbar_image} />
        </nav>
    );
};

export default Navbar;