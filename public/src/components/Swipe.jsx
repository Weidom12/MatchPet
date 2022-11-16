import React, { useState } from "react";


import Match from "../assets/love.png";
import Arrow from "../assets/arrow_der.png";
import { Card } from "./Card";
import styled from "styled-components";


import data from "../assets/users.json"
export default function Swipe() {

  
  const [isSwiped, setIsSwiped] = useState(false);
  const [userList, setUserList] = useState(data);
  const [currentUser, setCurrentUser] = useState(userList[0]);
  const [nextUser, setNextUser] = useState(userList[1]);

  const handleOnClickMatch = () => {
    alert("hiciste Match")
    
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
            rate={currentUser.rate}
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
.card-container {
  position: relative;
  width: 300px;
  height: 450px;
  margin: auto;
}

.card {
  margin: auto;
  width: 300px;
  height: 500px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04), 0 12px 20px 0 rgba(0, 0, 0, 0.12);
  position: absolute;
  background-color: #fff;
  background-size: cover;
  background-position: center;
}


.buttons {
  margin-top: 56px;
  display: flex;
  justify-content: center;
}

.button-next,
.button-match {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0px;
  appearance: none;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04), 0 12px 20px 0 rgba(0, 0, 0, 0.12);
}

.button-next {
  margin-left: 35px;
}

`;