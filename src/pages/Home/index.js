import Navbar from "../../components/NavBar";
import Loader from "../../components/Loader";
import { useState, useEffect } from 'react';

//axios
import axios from 'axios';

const Home = () => {
    const [ isLoad, setIsLoad ] = useState(false);
    const [ data, setData ] = useState([]);

    const handleStateComponent = () => {
        setIsLoad(!isLoad)// = falso
    }

    //colocar dados do api abaixo:
    useEffect( () => {
        setIsLoad(true)
        //console.log('useEffect') //teste
        axios.get('https://rickandmortyapi.com/api/character').then(
            res => {
                //console.log(res.data)
                setData(res.data.results)
            }
        ).catch( e => console.log("Erro", e) ).finally( () => setIsLoad(false)) //executar para cair erro ou não
    }, [] )

    return(
        <div>
            <Navbar />
            <h1>Home</h1>
            <p>Componente: </p>
            {data.map( (el, index) => (
                <div key={index}>
                    <h6> {el.name} </h6>
                    <img src={el.image} alt={el.name} />
                    <p>{el.gender}</p>
                    <p>{el.origin?.name}</p>
                    <p>Episódios {el.episode.length} </p>
                </div>
            ) )} 
            <Loader load={ isLoad } />
            
        </div>
        //cima do div: <button onClick={handleStateComponent } >Mudar estado</button>
    )
}

export default Home;