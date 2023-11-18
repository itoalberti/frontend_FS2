import { Button, Col, Form, Row } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TelaAlterarAgencia() {
  // const [validado, setValidado] = useState(false);
  const { codigo } = useParams();
  const [agencia, setAgencia] = useState({
    codigo: '',
    endereco: '',
    cidade: '',
  });

  function obterAgencia() {
    fetch(`http://localhost:3001/agencias/consultarParaAlterar/${codigo}`)
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
        // alert(resp.msg);
        setAgencia(resp);
      });
  }

  function alterarAgencia() {
    agencia.codigo = codigo;
    fetch('http://localhost:3001/agencias', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(agencia),
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
    obterAgencia();
  }, []);

  function manipularMudanca(e) {
    const elemForm = e.currentTarget;
    const id = elemForm.id;
    const valor = elemForm.value;
    setAgencia({ ...agencia, [id]: valor });
  }

  return (
    <Pagina>
      <h2>Alteração do endereço da agência {agencia.codigo}</h2>
      <br />
      <Form>
        {/* ENDEREÇO */}
        <Row>
          <Form.Group className='mb-3' controlId='formEndereco' style={{ width: '400px' }}>
            <Form.Label>Digite o novo endereço:</Form.Label>
            <Form.Control required type='text' id='endereco' value={agencia.endereco} onChange={manipularMudanca} />
            <Form.Control.Feedback type='invalid'>Informe o novo endereço da agência!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* CIDADE */}
        {/* <Row>
          <Form.Group className='mb-3' controlId='formCidade' style={{ width: '340px' }}>
            <Form.Label>Cidade:</Form.Label>
            <Form.Control required type='text' id='cidade' value={agencia.cidade} onChange={manipularMudanca} />
          </Form.Group>
        </Row> */}

        {/* CÓDIGO */}
        {/* <Row>
          <Col md='2'>
            <Form.Group className='mb-3' controlId='formSenha' style={{ width: '150px' }}>
              <Form.Label>Senha:</Form.Label>
              <Form.Control required type='password' id='senha' value={conta.senha} onChange={manipularMudanca} />
            </Form.Group>
          </Col>
        </Row> */}

        <br />
        <Row>
          {/* BOTÃO DE CADASTRAR */}
          <Col xs='auto'>
            <Button variant='dark' onClick={alterarAgencia}>
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
