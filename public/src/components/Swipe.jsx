import React, { useState } from "react";
import ReactDOM from "react-dom";


import Match from "../assets/love.png"
import Arrow from "../assets/arrow_der.png"
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
      name: "Felix",
      age: 25,
      rate: 40,
      image: Gato1,
      Desciption:"Un excelente compañero para los viajes, el ama salir a pasear con su humano."
    },
    {
      name: "Mascota 2",
      age: 23,
      rate: 95,
      image: Gato2,
      Desciption:"Un excelente compañero para los viajes, el ama salir a pasear con su humano."
    },
    {
      name: "Mascota 3",
      age: 24,
      rate: 90,
      image: Gato3,
      Desciption:"Un excelente compañero para los viajes, el ama salir a pasear con su humano."
    },
    {
      name: "Mascota 4",
      age: 25,
      rate: 40,
      image: Perro1,
      Desciption:"Un excelente compañero para los viajes, el ama salir a pasear con su humano."
    },
    {
      name: "Mascota 5",
      age: 24,
      rate: 90,
      image: Gato3,
      Desciption:"Un excelente compañero para los viajes, el ama salir a pasear con su humano."
    },
    {
      name: "Mascota 6",
      age: 25,
      rate: 40,
      image: Perro1,
      Desciption:"Un excelente compañero para los viajes, el ama salir a pasear con su humano."
    }
      
  ]);
  const [currentUser, setCurrentUser] = useState(userList[0]);
  const [nextUser, setNextUser] = useState(userList[1]);
  
  
  const handleOnClickMatch = () => {
    setIsSwiped(true);
    setTimeout(() => {
      setIsSwiped(false);
      setCurrentUser(nextUser);
      setNextUser(userList[2]);
      setUserList(userList.slice(1));
    }, 1000);
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
background-color:grey`;