import { Country } from "@/app/models/country";

export const mockCountries: Country[] = [
  {
    __typename: "Country",
    code: "US",
    name: "United States",
    native: "United States",
    phone: "+1",
    continent: {
      name: "North America",
    },
    capital: "Washington, D.C.",
    currency: "USD",
    languages: [
      {
        code: "en",
        name: "English",
      },
    ],
    emoji: "🇺🇸",
    latlng: [37.0902, -95.7129],
    imageUrl: "https://example.com/flag-us.png",
  },
];
