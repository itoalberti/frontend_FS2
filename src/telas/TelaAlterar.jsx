// OK
import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';

export default function TelaAlterar() {
  // const [validado, setValidado] = useState(false);
  const [conta, setConta] = useState({
    num: '',
    email: '',
    nome: '',
    senha: '',
    ano: '',
  });

  function alterarConta() {
    fetch('http://localhost:3000/contas', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(conta),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
        alert(resp.msg);
      });
  }

  function manipularMudanca(e) {
    const elemForm = e.currentTarget;
    const id = elemForm.id;
    const valor = elemForm.value;
    setConta({ ...conta, [id]: valor });
  }

  // function manipulaSubmissao(e) {
  //   const form = e.currentTarget;
  //   // inserir condição de senha e nome/email
  //   if (form.checkValidity()) {
  //     // dados válidos → proceder com o cadastro
  //     let contas = props.listaContas;
  //     contas.push(conta);
  //     props.setConta(contas);
  //     setValidado(false);
  //     props.exibirTabela(true);
  //   } else {
  //     setValidado(true);
  //   }
  //   e.preventDefault();
  //   e.stopPropagation();
  // }

  return (
    <Pagina>
      <h2>Alteração de cadastro</h2>
      <br />
      <Form>
        {/* EMAIL */}
        <Form.Group className='mb-3' controlId='formEmail' style={{ width: '340px' }}>
          <Form.Label>Email:</Form.Label>
          <Form.Control required type='email' id='email' value={conta.email} onChange={manipularMudanca} />
          <Form.Control.Feedback type='invalid'>Informe o email do cliente!</Form.Control.Feedback>
        </Form.Group>

        {/* NOME */}
        <Form.Group className='mb-3' controlId='formNome' style={{ width: '340px' }}>
          <Form.Label>Nome:</Form.Label>
          <Form.Control required type='text' id='nome' value={conta.nome} onChange={manipularMudanca} />
        </Form.Group>

        <Row>
          {/* SENHA */}
          <Col md='2'>
            <Form.Group className='mb-3' controlId='formSenha' style={{ width: '150px' }}>
              <Form.Label>Senha:</Form.Label>
              <Form.Control required type='password' id='senha' value={conta.senha} onChange={manipularMudanca} />
            </Form.Group>
          </Col>
        </Row>

        {/* ANO DE NASCIMENTO */}
        <Form.Group className='mb-3' controlId='formAno' style={{ width: '150px' }}>
          <Form.Label>Ano de nascimento:</Form.Label>
          <Form.Control required type='number' min='1900' id='ano' value={conta.ano} onChange={manipularMudanca} />
        </Form.Group>
        <br />
        <Row>
          {/* BOTÃO DE CADASTRAR */}
          <Col xs='auto'>
            <Button variant='dark' onClick={alterarConta}>
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
