import { useState, useEffect } from 'react';
import Group from './Group';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from './tools';
import Logo from "../../../assets/logos.webp";

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);

  const [userEmail, setUserEmail] = useState("");
  useEffect(async () => {
    setUserEmail(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).email
    );
  }, []);

  const [userAvatarImage, setUserAvatarImage] = useState("");
  useEffect(async () => {
    setUserAvatarImage(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).avatarImage
    );
  }, []);

    return <div>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Matchpet</h1>
            </div>
            <h1>Mis Datos</h1>
        <Group>
            <h2>Nombre de usuario: <h3>{userName}</h3></h2>       
        </Group>
        <Group>
            <h2>Correo Electronico: <h3>{userEmail}</h3></h2>
        </Group>
        <Group>
            <h2>Profesion: <h3>{stored.profesion} </h3></h2>
       </Group>
       <Group>
             <h2>Fecha de nacimiento: <h3>{months.getShortName(stored.month)} {stored.day} </h3></h2>
       </Group>
        <Group>
            <button
                style={buttonStyle}
                onClick={startEditCallback}
            >Editar</button>
        </Group>
    </div>
}