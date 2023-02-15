

const Loader = ( {load} ) => {

    

    return(
        <div>
            { load && (<h3>Carregando...</h3>) }
        </div>
    )
}

export default Loader;