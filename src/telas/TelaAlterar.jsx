// OK
import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';

export default function TelaAlterar() {
  return (
    <Pagina>
      <h2>Alteração de cadastro</h2>
      <br />
      <Form>
        {/* EMAIL */}
        <Form.Group className='mb-3' controlId='formEmail' style={{ width: '340px' }}>
          <Form.Label>Email:</Form.Label>
          <Form.Control required type='email' />
          <Form.Control.Feedback type='invalid'>Informe o email do cliente!</Form.Control.Feedback>
        </Form.Group>

        {/* NOME */}
        <Form.Group className='mb-3' controlId='formNome' style={{ width: '340px' }}>
          <Form.Label>Nome:</Form.Label>
          <Form.Control required type='text' />
        </Form.Group>

        <Row>
          {/* SENHA */}
          <Col md='2'>
            <Form.Group className='mb-3' controlId='formSenha' style={{ width: '150px' }}>
              <Form.Label>Senha:</Form.Label>
              <Form.Control required type='password' />
            </Form.Group>
          </Col>

          {/* REPETIR A SENHA */}
          <Col md='2'>
            <Form.Group className='mb-3' controlId='formSenha2' style={{ width: '150px' }}>
              <Form.Label>Repita a senha:</Form.Label>
              <Form.Control required type='password' />
            </Form.Group>
          </Col>
        </Row>

        {/* ANO DE NASCIMENTO */}
        <Form.Group className='mb-3' controlId='formAno' style={{ width: '150px' }}>
          <Form.Label>Ano de nascimento:</Form.Label>
          <Form.Control required type='number' min='1900' />
        </Form.Group>
        <br />
        <Row>
          {/* BOTÃO DE CADASTRAR */}
          <Col xs='auto'>
            <Button variant='dark' type='submit'>
              Confirmar alterações
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
