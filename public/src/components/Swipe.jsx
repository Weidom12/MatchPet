import React, { useState } from "react";


import Match from "../assets/love.png"
import Arrow from "../assets/arrow_der.png"
import { Card } from "./Card";
import styled from "styled-components";

import "./styles.css";

import Gato1 from "../assets/Gato_1.jpg"
import Gato2 from "../assets/Gato_2.jpg"
import Gato3 from "../assets/Gato_3.jpg"

import Perro1 from "../assets/Perro_1.jpg"

import data from "../assets/users.json"
export default function Swipe() {

  
  const [isSwiped, setIsSwiped] = useState(false);
  const [userList, setUserList] = useState(data);
  const [currentUser, setCurrentUser] = useState(userList[0]);
  const [nextUser, setNextUser] = useState(userList[1]);

  const handleOnClickMatch = () => {
    
  };
  
  const handleOnClickNext = () => {
    setIsSwiped(true);
    setTimeout(() => {
      setIsSwiped(false);
      setCurrentUser(nextUser);
      setNextUser(userList[2]);
      setUserList(userList.slice(1));
    }, 1000);
  };
  return (
    <Container style={{padding:'10vh 0vh 0vh 0vh'}}>
        <div className="card-container">
          
        {nextUser !== undefined ? (
          <Card
            username={nextUser.username}
            age={nextUser.age}
            rate={nextUser.rate}
            avatarImage={nextUser.avatarImage}
            Description={nextUser.Description}
            isSwiped={false}
          />
        ) : null}
        {currentUser !== undefined ? (
          <Card
            username={currentUser.username}
            age={currentUser.age}
            email={currentUser.email}
            avatarImage={currentUser.avatarImage}
            Description={currentUser.Description}
            isSwiped={isSwiped}
          />
        ) : null}
        
      </div>
      <div className="buttons" >
        <button className="button-match" onClick={handleOnClickMatch}>
          <img src={Match} alt="" style={{ width: "60px", height: "60px" }} />
        </button>
        <button className="button-next" onClick={handleOnClickNext}>
          <img src={Arrow} alt="" style={{ width: "60px", height: "60px" }} />
        </button>
      </div>

      
    </Container>
    
  );
};
const Container = styled.div`
`;