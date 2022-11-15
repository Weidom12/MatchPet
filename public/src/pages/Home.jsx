import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './App.css';
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
            <div id='apartado1'> 
              <p> 
                MatchPet surgio como una idea para contribuir con la problematica
                  que hoy en dia se volvio tan comun que es el avandono de animales
                  con esta app web podras poner en adopcion mascotas que buscan familia 
                  o podras tu adoptar mascotas que necesitan amor y felicidad.        
                
              </p>    
                
              <p>
                  Ademas nuestra app web tiene una funcion que te permitira poner alertas
                  de que tu mascota esta perdida y asi todos los que estan cerca de ti 
                  podran ayudarte a encontrarla.
              </p>

              <p>
                  Finalmente contamos con un chat el cual puedes utilizar para contactarte
                  con la persona que encontro tu madcota (en el caso de que se extraviara)
                  o tambien contactarse con la persona que quiere adoptar la mascota que 
                  pusiste en adopcion o viceversa.
              </p>
            </div>  
          </header>
        
        </div>
      </Container>
      <Footer/>
    </>
  );
  }
  
const Container = styled.div``;
