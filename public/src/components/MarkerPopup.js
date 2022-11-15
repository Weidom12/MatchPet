import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  const { name } = props.data;
  const { description } = props.data;
  const { imagen } = props.data;
  
  return (
    <Popup>
      <div><h1>{name}</h1></div>
     <p>{description}</p>
      <img src={imagen} border="1" alt="" width="300" height="250"/>
    </Popup>
  );
};

export default MarkerPopup;
