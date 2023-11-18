import { Button, Container, Table } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';

export default function TelaConsultarAgencias(props) {
  const [agencias, setAgencias] = useState([]);

  function excluirAgencia(codigo) {
    fetch('http://localhost:3001/agencias', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        codigo: codigo,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
        // alert(resp.msg);
        consultarAgencias();
      });
  }

  function consultarAgencias() {
    fetch('http://localhost:3001/agencias')
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setAgencias(resp);
      });
  }

  useEffect(() => {
    consultarAgencias();
  }, []);

  return (
    <Pagina>
      <Container>
        <br />
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th style={{ width: '15%' }}>Código:</th>
              <th style={{ width: '40%' }}>Endereço:</th>
              <th style={{ width: '30%' }}>Cidade:</th>
              <th style={{ width: '15%' }}>Ações:</th>
            </tr>
          </thead>
          <tbody>
            {/* ? →  método map só será chamado se listaAgencias for um atributo válido */}
            {agencias?.map((agencia) => {
              return (
                //   necessário identificar cada linha da tabela usando "key"
                // key → ajuda o React na rendereização dos componentes no DOM virtual
                <tr key={agencia.codigo}>
                  <td>{agencia.codigo}</td>
                  <td>{agencia.endereco}</td>
                  <td>{agencia.cidade}</td>
                  <td>
                    <a href={`/alterarAgencia/${agencia.codigo}`} type='button' class='btn btn-primary' style={{ 'margin-right': '15px' }}>
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-fill' viewBox='0 0 16 16'>
                        <path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z' />
                      </svg>
                    </a>
                    <Button
                      type='button'
                      class='btn btn-primary'
                      onClick={() => {
                        excluirAgencia(agencia.codigo);
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
