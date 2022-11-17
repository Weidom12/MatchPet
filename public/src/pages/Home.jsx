import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from '../components/Carousel';

export default function Home() {
  const navigate = useNavigate();
  const openMenu = async () => {
    localStorage.clear();
      navigate("/");
  };

  return (
    <>
      <Navbar/>
      <Carousel/>
      <Container>
        <div className="App">
          <header className="App-header">
            <h1 className="title" >Bienvenido a MatchPet</h1> 
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
  
const Container = styled.div`
.App {
    text-align: center;
}

.App-logo {
    height: 40vmin;
    pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
    }
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
    h1 {
      color:black;

    }
}

.App-link {
    color: #61dafb;
}

@keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}`;
