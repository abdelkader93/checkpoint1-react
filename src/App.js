import React from 'react';
import './App.css';
import { Button, Card } from 'react-bootstrap';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';

function App() {
  const firstName = "Abdelkader"
  const handleName = () => {
    if (firstName) {
      return alert(`Hello ${firstName}`)
    }
    else return alert("Hello there")
  };
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
          </Card.Text>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary" onClick={handleName}>Go somewhere</Button>
        </Card.Body>
      </Card>
      <p>{`${firstName}` ? `Hello ${firstName}` : `Hello there!`}</p>
    </div>
  );
}

export default App;
