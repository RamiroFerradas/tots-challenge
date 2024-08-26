import { Country } from "@/app/models/country";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  filteredCountries: Country[];
  selectedCountry: Country | null;
  setSelectedCountry: Dispatch<SetStateAction<Country | null>>;
  setOpenDetails: Dispatch<SetStateAction<boolean>>;
};
const SearchCountrie = ({
  searchTerm,
  setSearchTerm,
  filteredCountries,
  selectedCountry,
  setSelectedCountry,
  setOpenDetails,
}: Props) => {
  return (
    <div className="p-4 bg-gray-100 w-full h-full">
      <input
        type="text"
        placeholder="Buscar país..."
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="space-y-2 h-36 lg:h-full overflow-auto">
        {!filteredCountries.length ? (
          <h4 className="text-center">No se encontraron paises</h4>
        ) : (
          filteredCountries.map((country) => (
            <li
              key={country.code}
              className={`p-2 flex justify-between items-center cursor-pointer rounded ${
                selectedCountry?.code === country.code
                  ? "bg-blue-200"
                  : "bg-white"
              } hover:bg-blue-100`}
              onClick={() => setSelectedCountry(country)}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={country.imageUrl}
                  alt={`Flag of ${country.name}`}
                  width={40}
                  height={40}
                  className="object-cover rounded-md"
                />
                <span>{country.name}</span>
              </div>
              <button
                className="ml-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCountry(country);
                  setOpenDetails(true);
                }}
              >
                Info
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchCountrie;
