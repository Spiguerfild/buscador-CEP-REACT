import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css'
function App() {

  const [input, set_input] = useState('');
  const [cep, set_cep] = useState({});

  async function handle_search() {
    if (input === '') {
      alert('preencha o campo')
    } else if (input.length != 8) {
      alert('colocar 8 digitos, APENAS NÚMEROS ')
    }

    try {
      let response = await fetch(`https://viacep.com.br/ws/${input}/json`)
      let dados_cep = await response.json()
      set_cep(dados_cep)

    } catch {
      alert('erro ao procurar')
    }
  }/*FUNÇÃO ASYNC PESQUISA API*/


  return (
    <div className="container">

      <h1 className="title">Buscar CEP</h1>

      <div className="container-input">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(event) => set_input(event.target.value)}
        />
        <button className="button-search" onClick={handle_search}>
          <FiSearch size={25} color="#fff" />
        </button>

      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>Localidade: {cep.localidade}</span>
          <span>Logradouro: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Estado: {cep.uf}</span>

        </main>
      )}


    </div>
  );
}

export default App;
