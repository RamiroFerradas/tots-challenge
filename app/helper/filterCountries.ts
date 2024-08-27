import { Country } from "../models/country";

export const filterCountries = (
  countries: Country[],
  searchTerm: string
): Country[] => {
  const searchTermLower = searchTerm.toLowerCase();
  return countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(searchTermLower) ||
      country.continent.name.toLowerCase().includes(searchTermLower) ||
      country.code.toLowerCase().includes(searchTermLower)
    );
  });
};
