import Navbar from "../../components/NavBar";
import Loader from "../../components/Loader";
import { useState, useEffect } from 'react';

//axios
import axios from 'axios';

import { mainDefault } from '../../MOCK/main';

import Footer from "../../components/Footer";
import Card from "../../components/Cards";

//CSS Modules
//import './index.css';
import styles from './style.module.css';


const Home = () => {
    const [ isLoad, setIsLoad ] = useState(false);
    const [ data, setData ] = useState([]);

    //colocar dados do api abaixo:
    useEffect( () => {
        setIsLoad(true)
        //console.log('useEffect') //teste
        axios.get('https://rickandmortyapi.com/api/character')
        .then(
            res => {
                //console.log(res.data)
                setData(res.data.results)
            }
        )
        .catch( e => console.log("Erro", e) )
        .finally( () => setIsLoad(false)) //executar para cair erro ou não
    }, [] )

    return(
        <div>
            <Navbar navItens={mainDefault} />
            <div className={styles.content}>
                
                <div className={styles.container}>
                    <div className={styles.containerr}>
                        <h1>Home</h1>
                        <p>Componente: </p>

                        <div className={styles.content}>
                            {data.map( (el, index) => ( //el = elementos ou item tanto faz
                            <Card
                            key={index} 
                            name={el.name} 
                            image={el.image}
                            gender={el.gender} 
                            origin={el.origin} 
                            episode={el.episode} 
                            className={styles.card}/>
                                /*<div key={index} className="card">
                                    <h6> {el.name} </h6>
                                    <img src={el.image} alt={el.name}  />
                                    <p>{el.gender}</p>
                                    <p className="texto">{el.origin?.name}</p>
                                    <p>Episódios {el.episode.length} </p>
                                </div>
                                */
                        ))} 
                        <Loader load={ isLoad } />
                        </div>
                        <Footer footerText="Todos os direitos Resevados | Lucas Gallo - 2023" />
                    </div>
                </div>
            </div>
        </div>
        //cima do div: <button onClick={handleStateComponent } >Mudar estado</button>
    )
}

export default Home;