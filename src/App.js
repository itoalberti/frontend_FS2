import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaCadastrar from './telas/TelaCadastrar';
import TelaAlterar from './telas/TelaAlterar';
import TelaExcluir from './telas/TelaExcluir';
import TelaInicial from './telas/TelaInicial';
import Tela404 from './telas/Tela404';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelaConsultar from './telas/TelaConsultar';
import TelaAgencia from './telas/TelaAgencia';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          <Route path='/cadastrar' element={<TelaCadastrar />} />
          <Route path='/alterar' element={<TelaAlterar />} />
          <Route path='/excluir' element={<TelaExcluir />} />
          <Route path='/consultar' element={<TelaConsultar />} />
          <Route path='/cadastrarAgencia' element={<TelaAgencia />} />
          <Route path='*' element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
