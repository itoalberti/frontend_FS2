import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TelaAlterarConta() {
  // const [validado, setValidado] = useState(false);
  const { num } = useParams();
  const [conta, setConta] = useState({
    num: '',
    email: '',
    nome: '',
    senha: '',
    agencia: '',
    ano: '',
  });

  function obterConta() {
    fetch(`http://localhost:3001/contas/consultarParaAlterar/${num}`)
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
        // alert(resp.msg);
        setConta(resp);
      });
  }

  // const [agencia, setAgencia] = useState({
  //   endereco: '',
  //   cidade: '',
  //   codigo: '',
  // });

  function alterarConta() {
    conta.num = num;
    fetch('http://localhost:3001/contas', {
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
  useEffect(() => {
    obterConta();
  }, []);

  function manipularMudanca(e) {
    const elemForm = e.currentTarget;
    const id = elemForm.id;
    const valor = elemForm.value;
    setConta({ ...conta, [id]: valor });
    // setAgencia({ ...agencia, [id]: valor });
  }

  return (
    <Pagina>
      <h2>Alteração de cadastro</h2>
      <br />
      <Form>
        {/* NOME */}
        <Form.Group className='mb-3' controlId='formNome' style={{ width: '340px' }}>
          <Form.Label>Nome:</Form.Label>
          <Form.Control required type='text' id='nome' value={conta.nome} onChange={manipularMudanca} disabled />
        </Form.Group>

        {/* ANO DE NASCIMENTO */}
        <Form.Group className='mb-3' controlId='formAno' style={{ width: '150px' }}>
          <Form.Label>Ano de nascimento:</Form.Label>
          <Form.Control required type='number' min='1900' id='ano' value={conta.ano} onChange={manipularMudanca} />
        </Form.Group>

        {/* EMAIL */}
        <Form.Group className='mb-3' controlId='formEmail' style={{ width: '340px' }}>
          <Form.Label>Email:</Form.Label>
          <Form.Control required type='email' id='email' value={conta.email} onChange={manipularMudanca} />
          <Form.Control.Feedback type='invalid'>Informe o email do cliente!</Form.Control.Feedback>
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

        <Row>
          {/* AGÊNCIA */}
          <Col md='2'>
            <Form.Group className='mb-3' controlId='formAgencia' style={{ width: '150px' }}>
              <Form.Label>Agência:</Form.Label>
              <Form.Control required type='number' id='agencia' value={conta.agencia} onChange={manipularMudanca} />
            </Form.Group>
          </Col>
        </Row>

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
