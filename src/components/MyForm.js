import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* Criação de Form */}
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" placeholder="Digite seu Nome!" />
            </div>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm