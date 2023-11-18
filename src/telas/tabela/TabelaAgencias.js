// import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
// import listaContas from '../../dados/mockContas.js';

export default function TabelaAgencias(props) {
  // const [agencias, setAgencias] = useState();

  return (
    <Container>
      <h2>Lista de agências bancárias</h2>
      <br />
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Endereço</th>
            <th>Cidade</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>
          {listaAgencias?.map((agencia) => {
            return (
              //   necessário identificar cada linha da tabela usando "key"
              // key → ajuda o React na rendereização dos componentes no DOM virtual
              <tr key={agencia.codigo}>
                <td>{agencia.endereco}</td>
                <td>{agencia.cidade}</td>
                <td>{agencia.codigo}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
