// OK
import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useRef } from 'react';

export default function TelaExcluirConta() {
  const email = useRef('');
  const senha = useRef('');
  // precisa incluir [validado, setValidado] e [conta, setConta]?

  function excluirConta() {
    // fetch('http://localhost:3001/contas', {
    fetch('http://localhost:3001/contas', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: email.current.value,
        senha: senha.current.value,
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
      <h2>Exclusão de conta</h2>
      <br />
      <Form>
        {/* EMAIL */}
        <Form.Group className='mb-3' controlId='formEmail' style={{ width: '340px' }}>
          <Form.Label>Digite o email da conta que deseja excluir:</Form.Label>
          <Form.Control required type='email' ref={email} />
          <Form.Control.Feedback type='invalid'>Informe o email do cliente!</Form.Control.Feedback>
        </Form.Group>

        <Row>
          {/* SENHA */}
          <Col md='2'>
            <Form.Group className='mb-3' controlId='formSenha' style={{ width: '150px' }}>
              <Form.Label>Senha:</Form.Label>
              <Form.Control required type='password' ref={senha} />
            </Form.Group>
          </Col>
        </Row>
        <br />

        <Row>
          {/* BOTÃO DE EXCLUIR */}
          <Col xs='auto'>
            <Button variant='danger' onClick={excluirConta}>
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
