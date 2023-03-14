import Navbar from "../../components/NavBar";
import Footer from '../../components/Footer'
import Form from "../../components/Form";

import { mainDefault } from '../../MOCK/main'

//CSS Modules
import styles from './style.module.css'

const Contact = () => {

    return(
        <>
        <Navbar navItens={mainDefault}/>
            <div className={styles.container_contato}>
                <div className='container'>                
                    <Form />
                </div>
                <Footer footerText="Todos os direitos Resevados | Lucas Gallo - 2023" />
            </div>
        </>
        
    )
}

export default Contact;