import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import Contacts from "../components/FindContacts";
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

height: 90vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;

background-color: #008080;
border-radius: 10px;
box-shadow: 10px 5px 5px black;

  .container {
    background-color: rgba(150, 148, 148, 0.5);
    height: 100%;
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: 25% 90%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
