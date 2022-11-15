import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../components/index.css';
import Logo from "../assets/logos.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Mapa = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  const [inputNombre, cambiarInputNombre] = useState('');
  const [inputCorreo1, cambiarInputCorreo1] = useState('');
  const [inputCorreo2, cambiarInputCorreo2] = useState('');
  const [inputCorreo3, cambiarInputCorreo3] = useState('');
  // Funcion que se encargara de validar los datos y enviar el formulario
  const handleSubmit = (e) => {
	  e.preventDefault();

	  // Comprobamos validacion del formulario ...
	  // Si todo es correcto enviamos el formulario

	  console.log('Formulario Enviado!');
  }

  // Funcion que se encarga de cambiar el estado del inputNombre
  const handleInputNombre = (e) => {
	  cambiarInputNombre(e.target.value);
  }
  
  // Funcion que se encarga de cambiar el estado del inputCorreo
  const handleInputCorreo1 = (e) => {
	  cambiarInputCorreo1(e.target.value);
  }
  const handleInputCorreo2 = (e) => {
	cambiarInputCorreo2(e.target.value);
}
const handleInputCorreo3 = (e) => {
	cambiarInputCorreo3(e.target.value);
}


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  
    
   
  }, []);

  return (
		<>
		<Navbar/>
			<div className="contenedor">

            <div className="brand">
            <img src={Logo} alt="logo" />
            
          </div>
			<form action="" onSubmit={handleSubmit} className="formulario">
			
				<div>
				<h1>Formulario mascota</h1>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre de mascota"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

				<div>
					<label htmlFor="correo">Especie</label>
					<input
						type="text"
						name="correo1"
						placeholder="Especie de animal"
						id="correo1"
						value={inputCorreo1}
						onChange={handleInputCorreo1}
					/>
				</div>

				<div>
					<label htmlFor="correo">latitud</label>
					<input
						type="text"
						name="corre2"
						placeholder={state.latitude}
						id="correo2"
						value={state.latitude}
						onChange={handleInputCorreo2}
					/>
				</div>

				<div>
					<label htmlFor="correo">longitud</label>
					<input
						type="text"
						name="corre3"
						placeholder={state.longitude}
						id="correo3"
						value={state.longitude}
						onChange={handleInputCorreo3}
					/>
				</div>

				<div>
				<label htmlFor="correo">descripcion</label>
					<input 
					name="mensaje"
				    as="textarea" 
					placeholder="descripcion de mascota"/>
					
				</div>

				<div>
				<label htmlFor="correo">subir imagen</label>
					
					<input 
					type="file" name="imagen" 
					placeholder="descripcion de mascota"/>
					
				</div>
				
					
					
				
				
				

				



				<button type="submit">Enviar</button>
			   
				<div>
      
      
      <Link
        to={
          "/map"
          // state: {
          //   hello: 'world'
          // }
          
        }
		state={state}
      >
         mostrar mi ubicacion
      </Link>
   
     </div>
			
			</form>
			</div>
			<Footer/>
		</>	
      

	);
}

export default Mapa;