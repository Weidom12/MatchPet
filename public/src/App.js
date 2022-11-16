import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import MapView from "./components/MapView";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Mapa from "./pages/Mapa";
import Register from "./pages/Register";
import Findpet from "./pages/Findpet";
import Home from "./pages/Home"
import Perfil from "./components/vasco/Perfil"
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findpet" element={<Findpet />} />        
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/map" element={<MapView />} />
        <Route path= "/perfil" element = {<Perfil/>}/>
      </Routes>
    </BrowserRouter>
  );
}
