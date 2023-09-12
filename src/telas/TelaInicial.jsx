import { Row, Button, Col, Image } from 'react-bootstrap';
import Pagina from '../templates/Pagina';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TelaInicial(props) {
  return (
    <Pagina>
      <Row className='d-flex align-items-center justify-content-center'>
        <Col>
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/cadastrar'>
              <Button variant='dark'>Cadastrar nova conta</Button>
            </LinkContainer>
          </Row>
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/alterar'>
              <Button variant='dark'>Alterar conta existente</Button>
            </LinkContainer>
          </Row>
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/excluir'>
              <Button variant='dark'>Excluir conta</Button>
            </LinkContainer>
          </Row>
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/consultar'>
              <Button
                variant='dark'
                // onClick={() => {
                //   exibirTabela(true);
                // }}
              >
                Consultar contas existentes
              </Button>
            </LinkContainer>
          </Row>
          <br />
          <br />
          <Row className='justify-content-md-center p-2' md='2'>
            <LinkContainer to='/cadastrarAgencia'>
              <Button variant='dark'>Cadastrar agência</Button>
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
