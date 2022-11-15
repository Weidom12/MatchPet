import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Card } from "./Card";
import styled from "styled-components";

import "./styles.css";

import Gato1 from "../assets/Gato_1.jpg"
import Gato2 from "../assets/Gato_2.jpg"
import Gato3 from "../assets/Gato_3.jpg"

import Perro1 from "../assets/Perro_1.jpg"
export default function Swipe() {

  const [isSwiped, setIsSwiped] = useState(false);
  const [userList, setUserList] = useState([
    {
      name: "Mascota 1",
      age: 25,
      rate: 40,
      image: Gato1
    },
    {
      name: "Mascota 2",
      age: 23,
      rate: 95,
      image: Gato2
    },
    {
      name: "Mascota 3",
      age: 24,
      rate: 90,
      image: Gato3
    },
    {
      name: "Mascota 4",
      age: 25,
      rate: 40,
      image: Perro1
    },
    {
      name: "Mascota 5",
      age: 24,
      rate: 90,
      image: Gato3
    },
    {
      name: "Mascota 6",
      age: 25,
      rate: 40,
      image: Perro1
    }
      
  ]);
  const [currentUser, setCurrentUser] = useState(userList[0]);
  const [nextUser, setNextUser] = useState(userList[1]);
  
  
  const handleOnClickF = () => {
    setIsSwiped(true);
    setTimeout(() => {
      setIsSwiped(false);
      setCurrentUser(nextUser);
      setNextUser(userList[2]);
      setUserList(userList.slice(1));
    }, 1000);
  };
  
  const handleOnClick = () => {
    setIsSwiped(true);
    setTimeout(() => {
      setIsSwiped(false);
      setCurrentUser(nextUser);
      setNextUser(userList[2]);
      setUserList(userList.slice(1));
    }, 1000);
  };
  return (
    <Container style={{padding:'10vh 0vh 0vh 50vh'}}>
        <div className="card-container">
        {nextUser !== undefined ? (
          <Card
            name={nextUser.name}
            age={nextUser.age}
            rate={nextUser.rate}
            image={nextUser.image}
            isSwiped={false}
          />
        ) : null}
        {currentUser !== undefined ? (
          <Card
            name={currentUser.name}
            age={currentUser.age}
            rate={currentUser.rate}
            image={currentUser.image}
            isSwiped={isSwiped}
          />
        ) : null}
      </div>
      <div className="buttons" >
        <button className="button-nope" onClick={handleOnClickF}>
          <svg style={{ width: "40px", height: "40px" }} viewBox="0 0 24 24">
            <path
              fill="#cbced0"
              d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"
            />
          </svg>
        </button>
        <button className="button-like" onClick={handleOnClick}>
          <svg style={{ width: "28px", height: "28px" }} viewBox="0 0 24 24">
            <path
              fill="#f67272"
              d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
            />
          </svg>
        </button>
      </div>

    </Container>
      
  );
};
const Container = styled.div`
background-color:grey`;