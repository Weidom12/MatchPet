import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurgerButton'



function Navbar(){

    const [clicked, setClicked] = useState(false)
    
    const handleClick = () =>{
        //Cuando esta true lo pasa al false y vice versa
        setClicked(!clicked)
    }
    return(
        <>
        <NavContainer id="hola">

            <h1><a href='/home'>Matchpet</a></h1>
            <div className={`links ${clicked ? 'active' : ''}`}>

                <a href='/'>Home</a>
                <a href='/register'>Regístrate</a>
                <a href='/login'>Iniciar Sesión</a>
                
            </div>
            <div className='burguer'>
            <BurguerButton clicked={clicked} handleClick={handleClick}/>
           
            </div>
            
        </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`

height: 2rem;

h2{
    color: black;
    font-weight: 400, bold;
    span{
        font-weight:bold;
    }
}
padding: .4rem;
display: flex;
align-items: center;
justify-content: space-between;

a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;   
    a{
        color: black;
        font-size: 2rem;
        display: block;
    } 
    @media(min-width: 768px){
       position: initial;
       margin: 0;
       a{
        font-size: 1rem;
        color: white;
        display: inline;
       }
    }
}

.links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        color: #333;
    }
}

.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
`;
