import RMLoader from '../../assets/gif/rick-and-morty-rick.gif'

const Loader = ( {load} ) => {

    return(
        <div>            
            { load && (<img src={RMLoader} alt="Carregando" />)}
        </div>
    )
}

//{ load && (<img src></img>) }
//{ load && (<h3>Carregando...</h3>) }

export default Loader;