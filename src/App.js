import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelaInicial from './telas/TelaInicial';
import TelaCadastrarConta from './telas/TelaCadastrarConta';
import TelaCadastrarAgencia from './telas/TelaCadastrarAgencia';
import TelaAlterarConta from './telas/TelaAlterarConta';
import TelaAlterarAgencia from './telas/TelaAlterarAgencia';
import TelaExcluirConta from './telas/TelaExcluirConta';
import TelaExcluirAgencia from './telas/TelaExcluirAgencia';
import TelaConsultarContas from './telas/TelaConsultarContas';
import TelaConsultarAgencias from './telas/TelaConsultarAgencias';
import Tela404 from './telas/Tela404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          <Route path='/cadastrarConta' element={<TelaCadastrarConta />} />
          <Route path='/alterarConta/:num' element={<TelaAlterarConta />} />
          <Route path='/excluirConta' element={<TelaExcluirConta />} />
          <Route path='/consultarContas' element={<TelaConsultarContas />} />
          <Route path='/cadastrarAgencia' element={<TelaCadastrarAgencia />} />
          <Route path='/alterarAgencia/:codigo' element={<TelaAlterarAgencia />} />
          <Route path='/excluirAgencia' element={<TelaExcluirAgencia />} />
          <Route path='/consultarAgencias' element={<TelaConsultarAgencias />} />
          <Route path='*' element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
