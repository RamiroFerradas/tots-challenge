export type Country = {
  __typename: string;
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: {
    name: string;
  };
  capital: string;
  currency: string;
  languages: {
    code: string;
    name: string;
  }[];
  emoji: string;
  latlng: [number, number];
};
export type CountryCoordinates = {
  Country: string;
  "ISO Code": string;
  Latitude: number;
  Longitude: number;
};
