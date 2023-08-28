import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
// import listaAgencias from '../dados/mockAgencias.js';

export default function TelaAgencia(props) {
  const [validado, setValidado] = useState(false);
  const [agencia, setAgencia] = useState({
    // num: '',
    endereco: '',
    cidade: '',
    codigo: '',
  });

  //OK
  function manipularMudanca(e) {
    const elemForm = e.currentTarget;
    const id = elemForm.id;
    const valor = elemForm.value;
    setAgencia({ ...agencia, [id]: valor });
  }

  function manipulaSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      // dados válidos → proceder com o cadastro
      let agencias = props.listaAgencias;
      agencias.push(agencia);
      props.setAgencia(agencias);
      setValidado(false);
      props.exibirTabela(true);
    } else {
      setValidado(true);
    }
    e.preventDefault();
    e.stopPropagation();
  }

  //
  // RETURN
  //
  return (
    <>
      <Pagina>
        <h2>Cadastro de nova agência</h2>
        <br />
        <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>
          {/* ENDEREÇO */}
          <Form.Group className='mb-3' controlId='endereco' style={{ width: '400px' }}>
            <Form.Label>Endereço:</Form.Label>
            <Form.Control required type='endereco' id='endereco' value={agencia.endereco} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o endereco da agência!</Form.Control.Feedback>
          </Form.Group>

          {/* CIDADE */}
          <Form.Group className='mb-3' controlId='cidade' style={{ width: '340px' }}>
            <Form.Label>Cidade:</Form.Label>
            <Form.Control required type='text' id='cidade' value={agencia.cidade} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe a cidade da agência!</Form.Control.Feedback>
          </Form.Group>

          <Row>
            {/* CÓDIGO */}
            <Col md='2'>
              <Form.Group className='mb-3' controlId='codigo' style={{ width: '150px' }}>
                <Form.Label>Código da agência:</Form.Label>
                <Form.Control required type='text' id='codigo' value={agencia.codigo} onChange={manipularMudanca} />
                <Form.Control.Feedback type='invalid'>Informe o código da agência!</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Row>
            {/* BOTÃO DE CADASTRAR */}
            <Col xs='auto'>
              <Button variant='dark' type='submit'>
                Cadastrar agência
              </Button>
            </Col>

            {/* BOTÃO DE CANCELAR */}
            <Col xs='auto'>
              <LinkContainer to='/'>
                <Button variant='secondary'>Cancelar</Button>
              </LinkContainer>
            </Col>
          </Row>
        </Form>
      </Pagina>
    </>
  );
}
