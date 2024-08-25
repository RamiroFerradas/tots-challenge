"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Country } from "@/app/models/country";

type Props = {
  countries: Country[];
  selectedCountry: Country | null;
};

// const iconPerson = new L.Icon({
//   iconUrl: require("@/public/Map_pin_icon.png"),
//   iconRetinaUrl: require("@/public/Map_pin_icon.png"),
//   iconSize: new L.Point(60, 75),
//   className: "leaflet-div-icon",
// });

const Map = ({ selectedCountry }: Props) => {
  return (
    <MapContainer
      center={selectedCountry?.latlng || [20, 0]}
      zoom={selectedCountry ? 5 : 2}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {selectedCountry && (
        <Marker
          key={selectedCountry.code}
          position={selectedCountry.latlng}
          icon={L.icon({
            iconUrl: "/pin-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>
            <strong>{selectedCountry.name}</strong> <br />
            {selectedCountry.continent.name}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
