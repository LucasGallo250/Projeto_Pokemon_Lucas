import Navbar from "../../components/NavBar";
import Loader from "../../components/Loader";
import { useState } from 'react';

const Home = () => {
    const [ isLoad, setIsLoad ] = useState(false);
    const handleStateComponent = () => {
        setIsLoad(!isLoad)// = falso
    }

    return(
        <div>
            <Navbar />
            <h1>Home</h1>
            <p>Componente: </p>
            <Loader load={ isLoad } />
            <button onClick={handleStateComponent } >Mudar estado</button>
        </div>
    )
}

export default Home;