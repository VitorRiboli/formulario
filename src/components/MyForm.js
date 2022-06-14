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
    //MEU TESTE 
    const handleAge = (e) => {
        setAge(e.target.value); /* Valor final do input */
    }
    //console.log(name);
    //console.log(email);
    //console.log(age); //chamando no console

    const handleSubmit = (event) => { //pode chamar de e ou event.
        event.preventDefault(); // ESSE EVENTO PREVINE O ENVIO DO FORMULÁRIO 
        console.log("ENVIANDO");
        console.log(name, email, age);
    };

    return (
        <div>
            {/* 5 Envio de form */}
            {/* 1 Criação de Form */}
            <form onSubmit={handleSubmit}> {/*onSubmit para enviar o formulário, a função handleSubmit é a função apos o envio */}
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite seu Nome!" onChange={handleName}/>
                </div>
                {/* 2 Label envolveldo input */}
                <label>
                    <span>E-mail</span> { /*SPAN: Utilizando o span para ter mais controle para editar no CSS posteriormente*/}
                    <input type="email" name="email" placeholder="Digite seu E-mail!" 
                    onChange={(e) => setEmail(e.target.value)} /> {/*4 SIMPLIFICANDO A MANIPULAÇÃO DE FORMA / Lembrando que é muito melhor fazer uem um função separada, como em name e idade / passando o valor do inpt */}
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