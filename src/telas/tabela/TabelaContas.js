import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import listaContas from '../../dados/mockContas.js';

export default function TabelaContas(props) {
  const [contas, setContas] = useState();

  return (
    <Container>
      <h2>Lista de contas</h2>
      <br />
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Conta nº</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Agência</th>
            <th>Ano de nascimento</th>
          </tr>
        </thead>
        <tbody>
          {listaContas?.map((conta) => {
            return (
              //   necessário identificar cada linha da tabela usando "key"
              // key → ajuda o React na rendereização dos componentes no DOM virtual
              <tr key={conta.num}>
                <td>{conta.num}</td>
                <td>{conta.nome}</td>
                <td>{conta.email}</td>
                <td>{conta.agencia}</td>
                <td>{conta.ano}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
