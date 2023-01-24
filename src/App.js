import {FiSearch} from 'react-icons/fi';
import './style.css'
function App() {
  return (
    <div className="container">
      
      <h1 className="title">Buscar CEP</h1>

      <div className="container-input">
        <input type="text" placeholder="Digite seu CEP..." />
        <button className="button-search">
          <FiSearch size={25} color="#fff"/>
        </button>

      </div>
     
      <main className="main">
<h2>CEP: 123513123</h2>
<span>Rua: teste</span>
<span>Complemento: teste</span>
<span>vila tal</span>
<span>Estado: bl adsmdk</span>
      </main>

    </div>
  );
}

export default App;
