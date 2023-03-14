import { Link } from "react-router-dom";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { mainDefault } from "../../MOCK/main";
import styles from './style.module.css'

const Err = () => {
    return(
        <>
        <Navbar navItens={mainDefault}/>
            <div className="container">
                <div className={styles.contain} >
                    <h1 className={styles.title} >Oops, está pagina não existe</h1>
                    <Link className={styles.link}>Retornar para página anterior</Link>
                </div>
            </div>
            <Footer footerText="Todos os direitos Resevados | Lucas Gallo - 2023" />
        </>
        
    )
}

export default Err;