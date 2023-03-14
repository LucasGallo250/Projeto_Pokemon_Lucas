import LogoTipo from '../../assets/image/rickandmorty.png'
import styles from './style.module.css'

import { Link } from "react-router-dom";

const Navbar = ({ navItens }) => {
    return (
        <div className={styles.nav}>
            <div className={styles.navContent}>
                <Link to="/">
                    <img src={LogoTipo} alt='Logo Rick and Morty' width="350px" height="auto"/>
                </Link>
                <div className={styles.linkContent}>
                    {navItens?.map((el, index) => (
                        <Link key={index} className={styles.mainButton} to={el.href}>{el.label}</Link>   
                    ))}
                </div>
            </div>
        </div>
    )
}

//linha 17: <Link className={styles.mainButton} to="/contato">Contato</Link>
export default Navbar;