import React from 'react';

import { api } from '../../service/api';
import styles  from './style.module.css';

import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Search';
import Footer from '../../components/Footer';

const Home = () => {
    const [ page, setPage ] = React.useState(1);
    const [ data, setData ] = React.useState([]);
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ info, setInfo ] = React.useState({});

    const [cart, setCart] = React.useState([]);

    /*
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
*/

const fetchPokemonDetails = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.warn("ERROR", error);
    }
}

const fetchPokemons = async (page) => {
    setIsLoading(true);
    try {
        const response = await api.get(`pokemon?limit=40&offset=${(page - 1) * 30}`);
        const pokemonList = response.data.results;
        const pokemonData = await Promise.all(pokemonList.map(async (pokemon) => {
            const pokemonDetails = await fetchPokemonDetails(pokemon.url);
            return {
                name: pokemon.name,
                image: pokemonDetails.sprites.front_default,
                price: (pokemonDetails.order + 1) * 100 // exemplo de cálculo de preço
            };
        }));
        setData(pokemonData);
        setInfo(response.data);
    } catch (error) {
        console.warn("ERROR", error);
    } finally {
        setIsLoading(false);
    }
}

React.useEffect(() => {
    fetchPokemons(page);
}, [page]);

const handleIncrementPage = () => {
    if (page < info.pages) {
        setPage(page + 1);
    }
}

const handleDecrementPage = () => {
    if (page > 1) {
        setPage(page - 1);
    }
}

const handleAddToCart = (name, price) => {
    const item = { name, price };
    setCart([...cart, item]);
    //console.log(`Adicionado ao carrinho: ${name}`);
};


const handleRemoveFromCart = (name) => {
    const newCart = cart.filter((item) => item.name !== name.name);
    setCart(newCart);
    console.log(`Removido do carrinho: ${name}`);
};

const handleCheckout = () => {
    //console.log("Produtos comprados:", setCart);
    alert("Compra finalizada com sucesso!");
    setCart([cartTotal]);
};

const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

return(
    <div>
        <Navbar setCart={setCart} handleCheckout={handleCheckout}/>
        <Searchbar />
    
        <div className={styles.container}>
            <div>POKEMON LISTAS</div>
            <div>
                {isLoading ? (
                    <div>
                        <h2>Aguarde, carregando...</h2>
                    </div>
                ) : (
                    <div className={styles.cardswrapper}>
                        <div className={styles.content}>
                            { data.map( ( pokemon, index ) => (
                                <div key={index} className={styles.card}>
                                    <h3> {pokemon.name} </h3>
                                    <img className={styles.imagem_poke} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                                    <h4 className={styles.preco} > {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(index + 2)} </h4>
                                    <button className={styles.botao_carrinho} onClick={() => handleAddToCart(pokemon.name) }>Adicionar ao carrinho</button>
                                </div>
                            ) ) }
                        </div>
                    </div>
                )}

                <div className={styles.paginate}>
                    <button className={styles.botao_pagina} onClick={handleDecrementPage}>Página anterior</button>
                    <p className={styles.paragrafo}>{page} de {info.pages} Páginas</p>
                    <button className={styles.botao_pagina} onClick={handleIncrementPage}>Próxima Página</button>
                </div>
            </div>
        </div>
        <Footer footerText="Todos os direitos Resevados © 2023"/>
    </div>
)};



export default Home;