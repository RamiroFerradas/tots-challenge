import React from "react";
import { Country } from "@/app/models/country";
import Image from "next/image";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
type Props = {
  country: Country;
  onClose: () => void;
};

const CountryDetail = ({ country, onClose }: Props) => {
  return (
    <div className="absolute top-0 right-0 h-full w-full bg-white shadow-lg p-4 transition-transform duration-300 transform translate-x-0">
      <IconButton
        edge="end"
        color="inherit"
        onClick={onClose}
        aria-label="close"
        sx={{ position: "absolute", right: 16, top: 16 }}
        className="mb-4"
      >
        <CloseIcon />
      </IconButton>
      <div className="flex flex-col items-center mt-8">
        <Image
          src={country.imageUrl}
          alt={`Flag of ${country.name}`}
          width={100}
          height={60}
          className="mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">
          {country.name} {country.emoji}
        </h2>
        <div className="my-2 w-full border-t border-gray-300" />
        <div className="flex flex-col space-y-2 mt-2 w-full px-4">
          <div>
            <strong>Nombre Nativo:</strong> {country.native}
          </div>
          <div>
            <strong>Capital:</strong> {country.capital}
          </div>
          <div>
            <strong>Continente:</strong> {country.continent.name}
          </div>
          <div>
            <strong>Moneda:</strong> {country.currency}
          </div>
          <div>
            <strong>Código de Teléfono:</strong> {country.phone}
          </div>
          <div>
            <strong>Idiomas:</strong>{" "}
            {country.languages.map((lang) => lang.name).join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
