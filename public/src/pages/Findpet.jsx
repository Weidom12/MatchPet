/*import { useNavigate } from "react-router-dom";
import { Button, CardGroup, CardImg } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Izquierda from "../assets/arrow_izq.png";
import Imagen from "../assets/gato_1.jpg";
import Derecha from "../assets/arrow_der.png";
import Navbar from "../components/Navbar";
import Patas from "../assets/patas.png";

import Izq from "../components/Izq"

import { BsFillHeartFill,BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from 'react-icons/bs';

import Ico from "../assets/love.png";
import Card from 'react-bootstrap/Card';
export default function Findpet() {
  const divtitle = {'text-align':'center'};
  const OnClick=(event) => {

    
  };

  const navigate = useNavigate();
  const openMenu = async () => {
    localStorage.clear();
      navigate("/");
  };

  return (
    <>
    <html style={{'background-color':'#dee2e6'}}>
    <Navbar/>
      <div className="Findpet">
        <header className="Findpet-header">
        </header>
      </div>
    <Container >
      <Row style={{height:'1000vh'}}>
        
        <Col style={{width: '50vh', height: '70vh','border-size':'10px','border-color':'black'}}>
          <h4>Buscar otros match</h4>
          <Row>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
          </Row>
          <Row>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
          </Row>
          <Row>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
          </Row>
          <Row>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
          </Row>
          <Row>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
            <Col style={{height:"10vh"}} ><CardImg style={{height:"10vh"}} src={Patas}></CardImg></Col>
          </Row>
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
      </html>
    </>
  );
  }
  */

  import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
///////////////////////////////////////////////////
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";




import Swipe from "../components/Swipe";
///////////////////////////////////////////////////
export default function Findpet() {
  /////////////////////
  

  const openMenu = async () => {
    localStorage.clear();
      navigate("/");
  };
  ////////////////////////
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }
  }, []);
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(async () => {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      } else {
        navigate("/setAvatar");
      }
    }
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Navbar/>
      <div className="Findpet">
        <header className="Findpet-header">
        </header>
      </div>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          <Swipe />


        </div>
        
      
      </Container>
      <Footer/>


        <html style={{'background-color':'#dee2e6'}}>
    
      </html>
    </>
  );
  
}

const Container = styled.div`
background-size: cover;
background-position: center;

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  .container {
    height: 100%;
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
