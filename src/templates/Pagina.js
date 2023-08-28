// OK
import { Container } from 'react-bootstrap';
import Cabecalho from './Cabecalho';

export default function Pagina(props) {
  return (
    <>
      <Cabecalho texto='Banco Aurum' />
      <Container>{props.children}</Container>
    </>
  );
}
