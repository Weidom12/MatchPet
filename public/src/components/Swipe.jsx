


import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsFillHeartFill,BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from 'react-icons/bs';

import Ico from "../assets/love.png";
import Card from 'react-bootstrap/Card'

import { Button, CardGroup, CardImg } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Izquierda from "../assets/arrow_izq.png";
import Imagen from "../assets/gato_1.jpg";
import Derecha from "../assets/arrow_der.png";
export default function Swipe() {
  const [userName, setUserName] = useState("");
  const divtitle = {'text-align':'center'};
  const OnClick=(event) => {

    
  };

  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <Row>
          
          <Col>
            
          </Col>

          <Col>
          </Col>
          
          <Col>
            <Card style={{ width: '50vh', height: '70vh', 'border-radius': '10px', "box-shadow": "10px 5px 5px black"}} >
              <Card.Img variant="top" src={Imagen} style={{height:'100%'}} />
              <Card.Body style={{position:'absolute',top:'40vh ','background-color':"rgba(0, 0, 0, 0.2)", color:'white'}}>
                <Card.Title style={divtitle}>Rachel</Card.Title>
                <Card.Text>
                  Una perfecta compañera para explorar, juguetona y muy cariñosa.
                </Card.Text>
                <Row>
                  <Col style={{'text-Align':'center'}}><img src={Izquierda} style={{height:'8vh'}}></img></Col>
                  <Col style={{height:'12vh', 'text-Align':'center'}}><img src={Ico} style={{height:'10vh'}} ></img></Col>
                  <Col style={{'text-Align':'center',color:'white'}}><img src={Derecha} style={{height:'8vh'}}></img> </Col>
                  
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ visibility:"hidden", width: '50vh', height: '70vh', 'border-radius': '10px', "box-shadow": "10px 5px 5px black"}} >
              <Card.Img variant="top" src={Imagen} style={{height:'100%'}} />
              <Card.Body style={{position:'absolute',top:'40vh ','background-color':"rgba(0, 0, 0, 0.2)", color:'white'}}>
                <Card.Title style={divtitle}>Rachel</Card.Title>
                <Card.Text>
                  Una perfecta compañera para explorar, juguetona y muy cariñosa.
                </Card.Text>
                <Row>
                  <Col style={{'text-Align':'center'}}><img src={Izquierda} style={{height:'8vh'}}></img></Col>
                  <Col style={{height:'12vh', 'text-Align':'center'}}><img src={Ico} style={{height:'10vh'}} ></img></Col>
                  <Col style={{'text-Align':'center',color:'white'}}><img src={Derecha} style={{height:'8vh'}}></img> </Col>
                  
                </Row>
              </Card.Body>
            </Card>
            
            
            </Col>
        </Row>

    </Container>
  );
}

const Container = styled.div``;
