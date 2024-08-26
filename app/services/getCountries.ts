import { gql } from "@apollo/client";
import countriesWithCoordinates from "@/app/json/countriesWithCoordinates.json";
import { getClient } from "@/app/lib/apolloClient";
import { Country, CountryCoordinates } from "@/app/models/country";
import { getCountryImageUrl } from "@/app/helper/getCountryImageUrl";

export const getCountriesWithCoordinates = async (): Promise<Country[]> => {
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

  return data.countries
    .filter((country: Country) =>
      countriesWithCoordinates.some(
        (mockCountry: CountryCoordinates) =>
          mockCountry["ISO Code"] === country.code
      )
    )
    .map((country: Country) => {
      const matchedMock = countriesWithCoordinates.find(
        (mockCountry: CountryCoordinates) =>
          mockCountry["ISO Code"] === country.code
      );

      return {
        ...country,
        latlng: matchedMock
          ? [matchedMock.Latitude, matchedMock.Longitude]
          : [0, 0],
        imageUrl: getCountryImageUrl(country.code),
      };
    });
};
