// EXCLUIR AGÊNCIA DE ACORDO COM O CÓDIGO
import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useRef } from 'react';

export default function TelaExcluirConta() {
  const codigo = useRef('');

  function excluirAgencia() {
    fetch('http://localhost:3001/agencias', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        codigo: codigo.current.value,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
        alert(resp.msg);
      });
  }

  return (
    <Pagina>
      <h2>Exclusão de agência</h2>
      <br />
      <Form>
        {/* CÓDIGO */}
        <Form.Group className='mb-3' controlId='formCodigo' style={{ width: '350px' }}>
          <Form.Label>Digite o código da agência que deseja excluir:</Form.Label>
          <Form.Control required type='codigo' ref={codigo} />
          <Form.Control.Feedback type='invalid'>Informe o código da agência!</Form.Control.Feedback>
        </Form.Group>

        <br />
        <Row>
          {/* BOTÃO DE EXCLUIR */}
          <Col xs='auto'>
            <Button variant='danger' onClick={excluirAgencia}>
              Confirmar exclusão
            </Button>
          </Col>

          {/* BOTÃO DE CANCELAR */}
          <Col xs='auto'>
            <LinkContainer to='/'>
              <Button variant='secondary' type='submit'>
                Cancelar
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Form>
    </Pagina>
  );
}
