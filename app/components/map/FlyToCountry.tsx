import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { Country } from "@/app/models/country";

type Props = {
  selectedCountry: Country | null;
};

const FlyToCountry = ({ selectedCountry }: Props) => {
  const map = useMap();

  useEffect(() => {
    if (selectedCountry) {
      map.flyTo(selectedCountry.latlng, 5, { duration: 1.5 });
    }
  }, [selectedCountry, map]);

  return null;
};

export default FlyToCountry;
