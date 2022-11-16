import { useState, useEffect } from 'react';
import Group from './Group';
import { months, calcButtonTextColor } from './tools';

function renderMonthOptions() {
    return months.getMonths().map( (m, i) => {
        return <option
            key={i}
            value={i}
        >
            {m.shortName}
        </option>
    });
}

function bound(value, floor, ceil) {
    return Math.min(ceil, Math.max(value, floor));
}

export default function EditableUserProfile({
    stored,
    editCompleteCallback
}) {

    console.log("Edit User Profile");

    const [month, setMonth] = useState(stored.month);
    const [day, setDay] = useState(stored.day);
    const [color, setColor] = useState(stored.color);
    const [profesion, setProfesion] = useState(stored.profesion);
    const [email, setEmail] = useState(stored.email)
    
    const [userName, setUserName] = useState(stored.userName);
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

    const maxDay = months.getMaxDays(month);

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({userName ,month, day, color,profesion,userEmail});
    }

    useEffect(() => {
        setDay(bound(day, 1, maxDay));
    }, [month]);

    const buttonStyle = {
        backgroundColor: color,
        color: calcButtonTextColor(color)
    };

    calcButtonTextColor(color);

    return <>
        <Group>            
            <h2>Nombre:</h2>
           <input 
            type = 'text'
            value = {userName}
            onChange = {e=> setUserName(e.target.value)} 
            />

        </Group>
        <Group>  
            <h2> Correo Electronico:</h2>
            <input
                type='text'
                value={userEmail}
                onChange={e=> setEmail(e.target.value)}
                />          
        </Group>
        <Group>
            <h2> Profesion:</h2>
            <input
                type='text'
                value={profesion}
                onChange={e=> setProfesion(e.target.value)}
                />
        </Group>
        <Group>
            <h2>Fecha de nacimiento:</h2>            
            
            <select
                value={month}
                onChange={e => setMonth(bound(e.target.value, 0, 11))}
            >
                {renderMonthOptions()}
            </select>
            <input
                type='number'
                value={day}
                onChange={e => setDay(bound(e.target.value, 1, maxDay))}
                style={{width: "50px"}}
                />
        </Group>
        <Group>
            <button style={buttonStyle} onClick={handleSaveClicked}>Guardar</button>
            <button style={buttonStyle} onClick={handleCancelClicked}>Cancelar</button>
        </Group>
    </>
}