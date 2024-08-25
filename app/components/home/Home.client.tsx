"use client";
import { useState } from "react";
import { Country } from "@/app/models/country";
import SearchCountrie from "../searchCountrie/SearchCountrie";
import dynamic from "next/dynamic";

type Props = {
  countries: Country[];
};
const Map = dynamic(() => import("@/app/components/map/index"), {
  ssr: false,
});
const HomeClient = ({ countries }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto flex flex-row h-screen">
      <section className="w-3/4 h-full">
        <Map countries={filteredCountries} selectedCountry={selectedCountry} />
      </section>

      <section className="w-1/4 h-full ">
        <SearchCountrie
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredCountries={filteredCountries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </section>
    </div>
  );
};

export default HomeClient;
