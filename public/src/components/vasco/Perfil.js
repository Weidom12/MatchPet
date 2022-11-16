import { useState } from 'react';
import EditableUserProfile from './components/EditableUserProfile';
import UserProfile from './components/UserProfile';
import Navbar from "../NavbarLog";
import Footer from "../Footer";
import Logo from "../../assets/logos.webp";
import styled from 'styled-components';


const animals = [
    "Aardvark",
    "Albatross",
    "Alpaca",
    "Alligator",
    "Anchovie",
    "Angelfish",
    "Ant",
    "Antelope",
    "Armadillo",
    "Aurochs",
    "Axolotl"
]

const profesions = [
    "Estudiante",
    "Ingenieria",
    "Docencia",
    "Medico",
    "Veterinario",
    
]


function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randomName() {
    return "Anonymous " + animals[Math.floor(Math.random() * animals.length)]
}

function randomProfesion(){
    return profesions[Math.floor(Math.random() * profesions.length)]
}
function randomEmail(){
    return "anonymous.123@gmail.com"
}


function Perfil() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [name, setName] = useState(randomName());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());
    const [profesion, setProfesion] = useState (randomProfesion());
    const [color, setColor] = useState(randomColor());
    const [email,setEmail] = useState(randomEmail());
    

    const stored = {name, month, day, profesion ,color, email};
    const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.name);
            setMonth(result.month);
            setDay(result.day);
            setProfesion(result.profesion);
            setColor(result.color);
            setEmail(result.email);
            
        }        
        setEditMode(false);
    }

    return (
        <>
        <Navbar/>
        <Container>
            <div className="Perfil">                 
                {
                    editMode
                        ? <>
                            <div className="brand">
                            <img src={Logo} alt="logo" />
                            <h1>Matchpet</h1>
            </div>
                            <h1></h1>
                            <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                            {
                                isBirthdayToday
                                    ? <div className="birthday">Feliz Cumpleaños!</div>
                                    : <h1></h1>
                            }
                            <UserProfile
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        </Container>
        <Footer/>
    </>
    );
}
const Container = styled.div`
    div.Perfil {
  background-color: rgb(0, 0, 0);
  padding: 10em 0.1em;
  margin: 10px auto 0 auto;
  width: 1000px;
  border-radius: 1em;
  box-shadow: 10px 10px 10px rgb(81, 19, 114);
}

div.group {
  vertical-align: middle;
  margin: 5em;
  height: 32px;
}

div.birthday {
  font-size: x-large;
  margin: 0.6em;
}

div.color-box {
  position: relative;
  top: 6px;
  display: inline-block;
  width: 50px;
  height: 20px;
  border: 1px solid darkgray;
}


label {
  margin: 0px;
}


h2 {
    color: white;
    text-transform: uppercase;
    text-align: center;
  }

  input[type="color"] {
    position: relative;
    top: 4px;
  }

button:hover {
  box-shadow: 0px 0px 2px 2px rgb(202, 15, 15);
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  }
img {
    height: 5rem;
  }

  h1 {
    text-transform: uppercase;
    margin: 1em 0.8em;
    color:rgb(255, 255, 255);
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: rgb(199, 19, 19);
    border-radius: 2rem;
    padding: 3rem 5rem;
  }

  h3{
    background-color: transparent;
    padding: 0.5rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
  }
  input {
    background-color: transparent;
    padding: 0.5rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    }
  
    button {
      background-color: #4e0eff;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      }
    



`;
export default Perfil;
