"use client";
import { useState } from "react";
import { Country } from "@/app/models/country";
import SearchCountrie from "@/app/components/searchCountrie/SearchCountrie";
import dynamic from "next/dynamic";
import CountryDetail from "@/app/components/searchCountrie/CountryDetail";

type Props = {
  countries: Country[];
};

const Map = dynamic(() => import("@/app/components/map/index"), {
  ssr: false,
});

const HomeClient = ({ countries }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="mx-auto flex h-screen">
      <section className="w-3/4 h-full">
        <Map
          selectedCountry={selectedCountry}
          onCountrySelect={handleCountrySelect}
        />
      </section>

      <section className="relative w-1/4 h-full overflow-hidden">
        <div
          className={`absolute inset-0 transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } z-50 `}
        >
          <div className="p-4 bg-white h-full">
            {selectedCountry && (
              <CountryDetail
                country={selectedCountry}
                onClose={handleCloseDrawer}
              />
            )}
          </div>
        </div>

        <div className="relative z-10">
          <SearchCountrie
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredCountries={filteredCountries}
            selectedCountry={selectedCountry}
            setSelectedCountry={handleCountrySelect}
          />
        </div>
      </section>
    </div>
  );
};

export default HomeClient;
