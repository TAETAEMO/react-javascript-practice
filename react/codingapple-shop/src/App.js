import {Navbar, Container, Nav, Row} from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';
import './App.css';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './component/Detail';
import Card from './component/Card';

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">


      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">shoper</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Features</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
        <>
        <div className="main-bg" style={{backgroundImage : 'url('+bg+')'}}></div>
          
        <Row className="row">
          {
            shoes.map((a, i) => {
              return (
                <Card shoes={shoes[i]} i={i}></Card>
                )
              })
            }
        
        </Row>
        </>
        }/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/about' element={<div>어바웃페이지</div>}/>
        <Route path='*' element={<div>없는페이지입니다</div>}/>
      </Routes>
      
    </div>
  );
}

export default App;

{/* <Card shoes={shoes} i={1}></Card>
<Col className="col">
  <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
  <h4>{shoes[1].title}</h4>
  <p>{shoes[1].content}</p>
</Col>
<Col className="col">
  <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
  <h4>{shoes[2].title}</h4>
  <p>{shoes[2].content}</p>
</Col> */}