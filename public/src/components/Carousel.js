import React from "react";
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousels (){
  return(
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/logou.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/mascota_2.png"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/mascota1.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

const Container = styled.div`

  
  .App-logo {
	height: 40vmin;
	pointer-events: none;
  }

  .App-header {
	
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	background-size: contain;
  }
  
  
  @media (prefers-reduced-motion: no-preference) {
	.App-logo {
	  animation: App-logo-spin infinite 20s linear;
	}
  }
 
  

  
  @keyframes App-logo-spin {
	from {
	  transform: rotate(0deg);
	}
	to {
	  transform: rotate(360deg);
	}
  }
  

  
  .title{
  font-family:'Apple Chancery';
  
  
`;