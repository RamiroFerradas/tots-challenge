"use client";
import { filterCountries } from "@/app/helper";
import { Country } from "@/app/models/country";
import Image from "next/image";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import CardCountry from "./CardCountry";

type Props = {
  selectedCountry: Country | null;
  setSelectedCountry: Dispatch<SetStateAction<Country | null>>;
  setOpenDetails: Dispatch<SetStateAction<boolean>>;
  countries: Country[];
};
const SearchCountry = ({
  selectedCountry,
  setSelectedCountry,
  setOpenDetails,
  countries,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredCountries = filterCountries(countries, searchTerm);
  return (
    <div data-testid="SearchCountry" className="p-4 bg-gray-100 w-full h-full">
      <input
        type="search"
        placeholder="Buscar país..."
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="space-y-2 h-36 lg:h-[90vh] overflow-auto">
        {!filteredCountries.length ? (
          <h4 className="text-center">No se encontraron paises</h4>
        ) : (
          filteredCountries.map((country) => (
            <li key={country.code}>
              <CardCountry
                country={country}
                setSelectedCountry={setSelectedCountry}
                matchCountry={selectedCountry?.code === country.code}
                setOpenDetails={setOpenDetails}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchCountry;
