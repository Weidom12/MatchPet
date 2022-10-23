import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Izquierda from "../assets/arrow_izq.png";
import Imagen from "../assets/gato_1.jpg";
import Derecha from "../assets/arrow_der.png";
import Navbar from "../components/Navbar";

export default function Findpet() {
  const navigate = useNavigate();
  const openMenu = async () => {
    localStorage.clear();
      navigate("/");
  };

  return (
    <>
    <Navbar/>
      <div className="Findpet">
        <header className="Findpet-header">
        </header>
      </div>
    <Container>
      <Row>
        <Col><img src={Izquierda} width="100vh" style={{margin: "250px 50px 50px 50px"}}></img></Col>
        <Col style={{width: "80vh"}}><img src={Imagen} style={{width:"80vh"}}></img></Col>
        <Col><img src={Derecha} width="100vh" style={{margin: "250px 50px 50px 50px"}}></img> </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col style={{align:"center"}}><Button>Match</Button></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col style={{align:"center"}}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in dictum ante, vitae commodo libero. Mauris semper sagittis sem quis porta. Nulla in sapien nec odio scelerisque malesuada. In eu justo risus. Pellentesque luctus neque at neque lobortis suscipit. Nam et mi purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, metus eu condimentum efficitur, elit nibh auctor tellus, sit amet interdum urna erat non turpis. Cras quam ante, facilisis eget tincidunt at, dictum et velit. Suspendisse potenti. Sed eu justo nec lacus pellentesque ornare eget non mi. Morbi nec aliquet dui. In eros massa, consequat sodales tortor a, commodo lacinia nulla. Nunc gravida blandit velit, varius tempus erat dignissim in. Fusce egestas sapien magna, quis viverra est sollicitudin eu. Nunc dictum lorem quis pretium venenatis.</p></Col>
        <Col></Col>
      </Row>
      </Container>
    </>
  );
  }