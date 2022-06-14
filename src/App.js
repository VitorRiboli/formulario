import './App.css';
import MyForm from './components/MyForm';
import MyForm1 from './components/MyForm1';

function App() {
  return (
    <div className="App">
      <h2>Cadastro de Devs</h2>
      <MyForm /> {/* 1 Formulário de Cadastro de Usuario */}
      <h3>Abaixo Formulário de Auto Preenchimento com Pros</h3>
      <MyForm1 user={{ name:"Josias", 
      email:"josias@gmail.com", 
      age: 25 }} /> {/* 2 Formulário de Edição / como transferir esses dados para os inputs? / passando props para o preenchimento*/}
    </div> 
  );
}

export default App;
