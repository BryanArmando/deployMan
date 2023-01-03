import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicCard() {
  return (
    <Card className='cartapre'>
      <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/66704761?v=4"/>
      <Card.Body>
        <Card.Title className='nombrebold'>Bryan Armando Quisaguano Casa</Card.Title>
        <Card.Text>
        Mucho Gusto señoras y señores.
Soy una persona que le gusta aprender, considero que la preparación día a día es fundamental para el correcto desarrollo de habilidades. Me encantan los temas relacionados con el desarrollo de nuevas tecnologías. Además, me apasiona la solución de problemas a través de la programación, especialmente en Java.
En cuando a front, aun sigo prácticando para mejorar día a día.
Quisiera entrar a Kruger para tener una mejor via de práctica y mejoramiento de mis habilidades tanto en programación como sociales.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;