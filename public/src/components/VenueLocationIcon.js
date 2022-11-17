import L from "leaflet";
import img from "../assets/mascota.svg";

export const VenueLocationIcon = L.icon({
  iconUrl:img,
  iconRetinaUrl: img,
  iconAnchor: null,
  shadowUrl:null ,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});