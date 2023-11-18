import { Button, Container, Table } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';

export default function TelaConsultarContas(props) {
  const [contas, setContas] = useState([]);

  function excluirConta(num) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Tem certeza que deseja excluir a conta nº ${num}?`)) {
      fetch('http://localhost:3001/contas', {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          num: num,
        }),
      })
        .then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          console.log(resp);
          // alert(resp.msg);
          consultarContas();
        });
    }
  }

  // function alterarConta(codigo, email) {
  //   fetch('http://localhost:3001/contas', {
  //     method: 'PUT',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify({ codigo: codigo, email: email }),
  //   })
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((resp) => {
  //       console.log(resp);
  //       alert(resp.msg);
  //       consultarContas();
  //     });
  // }

  function consultarContas() {
    fetch('http://localhost:3001/contas')
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setContas(resp);
      });
  }

  useEffect(() => {
    consultarContas();
  }, []);

  return (
    <Pagina>
      <Container>
        <br />
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Conta nº</th>
              <th style={{ width: '30%' }}>Nome</th>
              <th style={{ width: '20%' }}>Email</th>
              <th style={{ width: '10%' }}>Agência</th>
              <th style={{ width: '15%' }}>Ano de nascimento</th>
              <th style={{ width: '15%' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* ? →  método map só será chamado se listaClientes for um atributo válido */}
            {contas?.map((conta) => {
              return (
                //   necessário identificar cada linha da tabela usando "key"
                // key → ajuda o React na rendereização dos componentes no DOM virtual
                <tr key={conta.num}>
                  <td>{conta.num}</td>
                  <td>{conta.nome}</td>
                  <td>{conta.email}</td>
                  <td>{conta.agencia}</td>
                  <td>{conta.ano}</td>
                  <td>
                    <a href={`/alterarConta/${conta.num}`} type='button' class='btn btn-secondary' style={{ 'margin-right': '15px' }}>
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-fill' viewBox='0 0 16 16'>
                        <path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z'></path>
                      </svg>
                    </a>
                    <Button
                      type='button'
                      class='btn btn-secondary'
                      onClick={() => {
                        excluirConta(conta.num);
                      }}
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash-fill' viewBox='0 0 16 16'>
                        <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z'></path>
                      </svg>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <LinkContainer to='/'>
        <Button variant='dark'>Voltar</Button>
      </LinkContainer>
    </Pagina>
  );
}
