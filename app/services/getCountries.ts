import { gql } from "@apollo/client";
import countriesWithCoordinates from "@/app/json/countriesWithCoordinates.json";
import { getClient } from "@/app/lib/apolloClient";
import { Country, CountryCoordinates } from "@/app/models/country";
import { getCountryImageUrl } from "@/app//helper/getCountryImageUrl";

export const getFilteredCountriesWithCoordinates = async (): Promise<
  Country[]
> => {
  const { data } = await getClient().query({
    query: gql`
      query {
        countries {
          code
          name
          native
          phone
          continent {
            name
          }
          capital
          currency
          languages {
            code
            name
          }
          emoji
        }
      }
    `,
  });

  const filteredCountries = data.countries.filter((country: Country) =>
    (countriesWithCoordinates as CountryCoordinates[]).some(
      (mockCountry) => mockCountry["ISO Code"] === country.code
    )
  );

  const countriesWithLatLng = filteredCountries.map((country: Country) => {
    const matchedMock = (countriesWithCoordinates as CountryCoordinates[]).find(
      (mockCountry) => mockCountry["ISO Code"] === country.code
    );

    return {
      ...country,
      latlng: matchedMock
        ? [matchedMock.Latitude, matchedMock.Longitude]
        : [0, 0],
      imageUrl: getCountryImageUrl(country.code),
    };
  });

  return countriesWithLatLng;
};
