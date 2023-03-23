import React from 'react';
import styles from './style.module.css'

const Searchbar = () => {
    let searchs = "";

    const [ search, setSearch ] = React.useState("");

    const onChange = (e) => {
        //console.log(e.target.value);
        //searchs = e.target.value;
        setSearch(e.target.value);
    }

    const onClick = (e) => {
        console.log('Aprontando Botão') //teste
    }

    return (
        <div className={styles.searchbar_container}>

            <div className={styles.searchbar}>
                <input 
                placeholder="Buscar pokemon..."
                onChange={onChange}
                />
            </div>

            <div className={styles.searchbar_btn}>
                <button onClick={onClick} >Buscar</button>
            </div>

        </div>
    )
}

export default Searchbar;