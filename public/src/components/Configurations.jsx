import React from "react";
import { useNavigate } from "react-router-dom";
import { GrConfigure } from "react-icons/gr";
import { CgLogOut} from 'react-icons/cg';



import styled from "styled-components";

export default function Configurations() {
  const navigate = useNavigate();
  const handleClick = async () => {
    alert("Éstas serán Configuraciones")
  };
  return (
    <Button onClick={handleClick}>
      <GrConfigure />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
