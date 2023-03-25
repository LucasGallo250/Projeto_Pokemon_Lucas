import React from 'react';

import { api } from '../../service/api';
import styles  from './style.module.css';

import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Search';
import Footer from '../../components/Footer';

const Home = () => {
    const [ page, setPage ] = React.useState([]);
    const [ info, setInfo ] = React.useState([]);

    const [ data, setDate ] = React.useState([]);
    const [ isLoad, setIsLoad ] = React.useState(false);

    React.useEffect( () => {
        setIsLoad(true);
        //api.get(`pokemon?page=${[page]}`).then( 
        api.get('pokemon?limit=30&offset=0')
        .then( res => {
            console.log(res.data);
            setDate(res.data.results);
            setInfo(res.data.info)
        })
        .catch( e => console.warn("ERROR", e))
        .finally(() => {
            //console.log('finalizado')
            setIsLoad(false);
        } )
    }, [])
    
    const handleIncrementPage = (ctx) => {
        if(page >= info.page){
            return
        } else {
            setPage(page + 1)
            window.scrollTo(0, 0)
        }
    }

    const handleDecrementPage = () => {
        if(page <= 0 ) {
            return
        } else {
            setPage(page - 1)
            window.scrollTo(0, 0)
        }
    }

    return(
        <div>
            <Navbar />
            <Searchbar />
        
            <div className={styles.container}>
                <div>POKEMON LISTAS</div>
                <div>
                    { isLoad && (
                        <div>
                            <h2>Aguarde, carregando...</h2>
                        </div>
                    )}

                    <div className={styles.cardswrapper}>
                        <div className={styles.content}>
                            { data.map( ( el, index ) => (
                                <div key={index} className={styles.card}>
                                    <h3> {el.name} </h3>
                                    <img src={el.image} alt={el.name} />
                                    
                                    <h4> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(index + 2)} </h4>
                                    <button onClick={() => console.log('Adicionado')} >Adicionar ao carrinho</button>
                                </div>
                            ) ) }
                        </div>
                    </div>

                    
                    <div className={styles.paginate}>
                        <button className={styles.botao_pagina} onClick={() => handleDecrementPage()  }>Página anterior</button>
                        <p className={styles.paragrafo}>{page} Páginas</p>
                        <button className={styles.botao_pagina} onClick={() => handleIncrementPage()}>Próxima Página</button>
                    </div>
                </div>

            </div>
            <Footer footerText="Todos os direitos Resevados © 2023"/>
        </div>
    )
}

export default Home;