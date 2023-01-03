import { Slider } from '@mui/material';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class BasicExample extends Component {


    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.rep = { masa: 0};
      }
    



    render(){

  return (
    <Card className='carta' style={{ width: '20rem'}}>
      <Card.Body>
        <Card.Title>Indice de masa corporal</Card.Title>
        <Card.Text>
          <h5>Kilogramos</h5>
        <Slider
            aria-label="Small steps"
            defaultValue={40}
            step={1}
            marks
            min={40}
            max={180}
            valueLabelDisplay="on"
        />
        <h5>Centímetros</h5>

        <Slider
            aria-label="Small steps"
            defaultValue={120}
            step={1}
            marks
            min={120}
            max={230}
            valueLabelDisplay="on"
        />
    </Card.Text>
        
<h5>
    Normal
</h5>
      </Card.Body>
    </Card>
  );
}
}

export default BasicExample;