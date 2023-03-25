import React from 'react';
import styles from './style.module.css'

const Searchbar = () => {
    //let searchs = "";

    const [ search, setSearch ] = React.useState("");

    const handleSubmit = (e) => {
        
        console.log(search);
        //searchs = e.target.value;
        if(!search) return;
        setSearch(e.target.value);
    }

    /* 
    const onClick = (e) => {
        console.log('Aprontando Botão') //teste
    }
    */

    return (
        <div className={styles.searchbar_container}>

            <div onSubmit={handleSubmit} className={styles.searchbar}>
                <input 
                placeholder="Buscar pokemon..."
                type="text"
                onChange={ (e) => setSearch(e.target.value) }
                value={search}
                />
            </div>

            <div className={styles.searchbar_btn}>
                <button type="sumbit" onSubmit={handleSubmit}>Buscar</button>
            </div>

        </div>
    )
}

export default Searchbar;