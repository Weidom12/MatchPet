import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  const { name } = props.data;
  const { description } = props.data;
  const { imagen } = props.data;
  
  return (
    <Popup>
      <div>{name}</div>
     {description}
      <img src={imagen} border="1" alt="" width="200" height="150"/>
    </Popup>
  );
};

export default MarkerPopup;
