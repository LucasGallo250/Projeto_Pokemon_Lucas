//API
import axios from 'axios';

import { useState } from 'react';

import styles from './style.module.css'

const Form = () => {

    const[data, setData] = useState( {  } )

    const submitFormData = (e) => {
        e.preventDefault()
        console.log(data)
        //alert("DEU CERTO")
        axios.post('https://webhook.site/1f84da6d-f27d-4c3d-8435-cba7d9450f98', data).then( res => {
            alert(res.status)
        } ).catch( () => alert('Ops, algo deu errado!') )
    }
    

    return(
        <div className={styles.card}>
            <h1 className={styles.title} >Formulário</h1>
            <form onSubmit={submitFormData} className={styles.form}>
                <input 
                    type='text' 
                    className={styles.inputs}
                    placeholder='Nome'
                    onChange={ e => setData( { ...data, nome: e.target.value } ) }
                    
                />
                <input 
                    type='text'
                    className={styles.inputs} 
                    placeholder='Email'
                    onChange={ e => setData( { ...data, email: e.target.value } ) }
                    
                />
                <input 
                    type='text' 
                    className={styles.inputs}
                    placeholder='Telefone' 
                    onChange={e => setData( { ...data, telefone: e.target.value } ) }
                    
                />

                <textarea
                    className={styles.textarea}
                    placeholder="Digite sua mensagem..."
                    onChange={ e => setData( { ...data, mensagem: e.target.value } ) }
                    
                />

                <input 
                    className={styles.sumbit}
                    type='submit'                    
                    value='Cadastrar' 
                />
            </form>
        </div>
    )
}

export default Form;