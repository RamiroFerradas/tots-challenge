import { Country } from "@/app/models/country";

type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredCountries: Country[];
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country) => void;
};

const SearchCountrie = ({
  searchTerm,
  setSearchTerm,
  filteredCountries,
  selectedCountry,
  setSelectedCountry,
}: Props) => {
  return (
    <div className="p-4 bg-gray-100 overflow-y-auto w-full">
      <input
        type="text"
        placeholder="Buscar país..."
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="space-y-2">
        {filteredCountries.map((country) => (
          <li
            key={country.code}
            className={`p-2 cursor-pointer rounded ${
              selectedCountry?.code === country.code
                ? "bg-blue-200"
                : "bg-white"
            } hover:bg-blue-100`}
            onClick={() => setSelectedCountry(country)}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCountrie;
