import React from 'react';

import { api } from '../../service/api';
import styles  from './style.module.css';

import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Search';

const Home = () => {
    const [ data, setDate ] = React.useState([])
    const [ isLoad, setIsLoad ] = React.useState(false);

    React.useEffect( () => {
        setIsLoad(true);
        api.get('pokemon?limit=50&offset=0')
        .then( res => {
            console.log(res.data);
            setDate(res.data.results);
        })
        .catch( e => console.warn("ERROR", e))
        .finally(() => {
            //console.log('finalizado')
            setIsLoad(false);
        } )
    }, [])
    
    return(
        <div>
            <Navbar />
            <Searchbar />
        
            <div className={styles.container}>
                <div>Pokemon list</div>
                <div>
                    { isLoad && (
                        <div>
                            <h2>Aguarde, carregando...</h2>
                        </div>
                    )}

                    { data.map( ( el, index ) => (
                        <div key={index}>
                            <h3> {el.name} </h3>
                            <h4> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(index + 2)} </h4>
                            <button onClick={() => console.log('Adicionado')} >Adicionar ao carrinho</button>
                        </div>
                    ) ) }
                </div>
            </div>
        </div>
    )
}

export default Home;