import Navbar from "../../components/NavBar";

import axios from 'axios';

import { useState } from 'react';

const Contact = () => {

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
        <div className="container">
            <Navbar className="navbar"/>
            <h1 className="title">Contato</h1>
            <form onSubmit={submitFormData}>
                <input 
                    type='text' 
                    placeholder='Nome'
                    onChange={ e => setData( { ...data, nome: e.target.value } ) }
                    
                />
                <input 
                    type='text' 
                    placeholder='Email'
                    onChange={ e => setData( { ...data, email: e.target.value } ) }
                    
                />
                <input 
                    type='text' 
                    placeholder='Telefone' 
                    onChange={e => setData( { ...data, telefone: e.target.value } ) }
                    
                />

                <textarea
                    placeholder="Digite sua mensagem..."
                    onChange={ e => setData( { ...data, mensagem: e.target.value } ) }
                    
                />

                <input 
                    className="button"
                    type='submit' 
                    value='Cadastrar' 
                />
            </form>
        </div>
    )
}

export default Contact;