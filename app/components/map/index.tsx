"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Country } from "@/app/models/country";
import MarkerIcon from "./MarkerIcon";
import { useEffect } from "react";

type Props = {
  selectedCountry: Country | null;
  onCountrySelect: (country: Country) => void;
};

const FlyToCountry = ({
  selectedCountry,
}: {
  selectedCountry: Country | null;
}) => {
  const map = useMap();

  useEffect(() => {
    if (selectedCountry) {
      map.flyTo(selectedCountry.latlng, 5, {
        duration: 1.5,
      });
    }
  }, [selectedCountry, map]);

  return null;
};

const Map = ({ selectedCountry, onCountrySelect }: Props) => {
  return (
    <MapContainer
      center={[20, -60]}
      zoom={selectedCountry ? 5 : 2}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <FlyToCountry selectedCountry={selectedCountry} />

      {selectedCountry && (
        <Marker
          key={selectedCountry.code}
          position={selectedCountry.latlng}
          icon={MarkerIcon}
          eventHandlers={{
            click: () => {
              onCountrySelect(selectedCountry);
            },
          }}
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
