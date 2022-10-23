import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();
  const openMenu = async () => {
    localStorage.clear();
      navigate("/");
  };

  return (
    <>
    <Navbar/>
    <Container>
        <div className="App">
        <header className="App-header">
            <h1 className="title">Bienvenido a MatchPet</h1>    
        </header>
    
    </div></Container>
    
    </>
  );
  }
  
const Container = styled.div`
.App-header {
    background-image: linear-gradient(to left,pink,orange);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;
