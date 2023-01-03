import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formen() {
  return (
    <div className='formulario'>
    <Form>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Dejame tu email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Escribeme tu mensaje</Form.Label>
        <Form.Control type="input" placeholder="Detalles" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  );
}

export default Formen;
