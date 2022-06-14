import './MyForm.css';

import { useState } from 'react';

const MyForm = () => {

    // 3 Gerenciamento de Dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();


    const handleName = (e) => {
        setName(e.target.value); /* Valor final do input */
    }
    console.log(name);


    //MEU TESTE 
    const handleAge = (e) => {
        setAge(e.target.value); /* Valor final do input */
    }
    console.log(age); //chamando no console

    return (
        <div>
            {/* 1 Criação de Form */}
            <form>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite seu Nome!" onChange={handleName}/>
                </div>
                {/* 2 Label envolveldo input */}
                <label>
                    <span>E-mail</span> { /*Utilizando o span para ter mais controle para editar no CSS posteriormente*/}
                    <input type="email" name="email" placeholder="Digite seu E-mail!" />
                </label>
                <label>
                    <span>Idade</span> { /*Utilizando o span para ter mais controle para editar no CSS posteriormente*/}
                    <input type="number" name="age" placeholder="Digite sua Idade" onChange={handleAge} />
                </label>


                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm