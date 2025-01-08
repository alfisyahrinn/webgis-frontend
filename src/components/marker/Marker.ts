
import L from 'leaflet';
import markerIcon from "../../assets/marker.svg"
import markerIconWarning from "../../assets/marker-warning.svg"

const marker1 = new L.Icon({
    iconUrl: markerIconWarning,
    iconRetinaUrl: markerIconWarning,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});
const marker2 = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

export {marker1, marker2}