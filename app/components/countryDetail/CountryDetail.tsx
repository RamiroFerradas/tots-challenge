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
    <div className="w-full h-full px-4" data-testid="CountryDetail">
      <IconButton
        edge="end"
        color="inherit"
        onClick={onClose}
        aria-label="close"
        className="mb-4 !absolute !right-2 !top-1 !lg:right-4 !lg:top-4"
      >
        <CloseIcon />
      </IconButton>
      <div className="flex flex-col items-start lg:items-center mt-8">
        <div className="flex lg:flex-col items-start lg:items-center gap-2">
          <Image
            src={country.imageUrl}
            alt={`Flag of ${country.name}`}
            width={100}
            height={60}
            className="lg:mb-4 w-10 lg:h-16 lg:w-24"
          />
          <h2 className="text-xl font-semibold mb-2">
            {country.name} {country.emoji}
          </h2>
        </div>
        <div className="my-2 w-full border-t border-gray-300" />
        <div className="flex flex-col space-y-2 mt-2 w-full ">
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
