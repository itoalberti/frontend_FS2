import { Row, Button, Col, Image } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TelaInicial(props) {
  return (
    <Pagina>
      <Row className='d-flex align-items-center justify-content-center'>
        <Col>
          {/* CADASTRAR CONTA */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/cadastrarConta'>
              <Button variant='dark'>Cadastrar nova conta</Button>
            </LinkContainer>
          </Row>

          {/* ALTERAR CONTA */}
          {/* <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/alterarConta'>
              <Button variant='dark'>Alterar conta existente</Button>
            </LinkContainer>
          </Row> */}

          {/* EXCLUIR CONTA */}
          {/* <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/excluirConta'>
              <Button variant='dark'>Excluir conta</Button>
            </LinkContainer>
          </Row> */}

          {/* CONSULTAR CONTAS */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/consultarContas'>
              <Button variant='dark'>Consultar contas existentes</Button>
            </LinkContainer>
          </Row>
          <br />
          <br />

          {/* CADASTRAR AGÊNCIA */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/cadastrarAgencia'>
              <Button variant='dark'>Cadastrar agência</Button>
            </LinkContainer>
          </Row>
          {/* ALTERAR AGÊNCIA */}
          {/* <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/alterarAgencia'>
              <Button variant='dark'>Alterar agência existente</Button>
            </LinkContainer>
          </Row> */}

          {/* EXCLUIR AGÊNCIA */}
          {/* <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/excluirAgencia'>
              <Button variant='dark'>Excluir agência</Button>
            </LinkContainer>
          </Row> */}

          {/* CONSULTAR AGÊNCIAS */}
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/consultarAgencias'>
              <Button variant='dark'>Consultar agências existentes</Button>
            </LinkContainer>
          </Row>
        </Col>
        <Col className='d-flex align-items-center justify-content-center'>
          <Image src='https://cdn.icon-icons.com/icons2/2104/PNG/512/bank_icon_129525.png' width={400} fluid />
        </Col>
      </Row>
    </Pagina>
  );
}
