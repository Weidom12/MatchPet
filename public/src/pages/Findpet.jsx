import { findpetRoute } from "../utils/APIRoutes";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen from "../assets/perro.gif";
import Izquierda from "../assets/arrow_izq.png";
import Derecha from "../assets/arrow_der.png";

import { FiChevronLeft } from "react-icons/fi";

export default function Findpet() {
  const navigate = useNavigate();
  const openMenu = async () => {
    localStorage.clear();
      navigate("/home");
  };

    return (
        <>
        <div>
          <Navbar>
              <ul>
                <li><a onClick={openMenu}>Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
              </ul>
          </Navbar> 
          </div>
          <Container>
            <Row>
              <Col><img src={Izquierda} width="100vh" style={{margin: "250px 50px 50px 50px"}}></img></Col>
              <Col><img src={Imagen}></img></Col>
              <Col><img src={Derecha} width="100vh" style={{margin: "250px 50px 50px 50px"}}></img> </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col style={{align:"center"}}><Button>Match</Button></Col>
              <Col></Col>
            </Row>
         </Container>
        </>
      );
}

const Navbar = styled.div`
width=100%;
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;

}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}`