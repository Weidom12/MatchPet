import React, { useState, useEffect } from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";

import { useLocation, useNavigate } from "react-router-dom";

import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 52.52437, lng: 13.41053 },
    zoom: 13,
    data,
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      };
      console.log(state);
      setState({
        ...state,
        data: {
          venues: state.data.venues.concat({
            name: "mi ubicacion",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        },
        currentLocation,
      });
      //navigate("map", { state: {} })
    }
  }, [location]);

  return (
    <LeafletMap center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.venues} />
    </LeafletMap>
  );
};

export default MapView;
