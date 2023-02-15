import Navbar from "../../components/NavBar";

import { useState } from 'react';

const Contact = () => {

    const[data, setData] = useState( {  } )
    const submitFormData = (e) => {
        e.preventDefault()
        console.log(data)
    }
    
    return(
        <div>
            <Navbar />
            <h1>Contato</h1>
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
                <input 
                    type='submit' 
                    value='Cadastrar' 
                />
            </form>
        </div>
    )
}

export default Contact;