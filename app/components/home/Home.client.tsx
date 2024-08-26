"use client";
import { useState } from "react";
import { Country } from "@/app/models/country";
import SearchCountrie from "@/app/components/searchCountrie/SearchCountrie";
import dynamic from "next/dynamic";
import CountryDetail from "@/app/components/searchCountrie/CountryDetail";
import classNames from "classnames";
import ErrorBoundary from "@/app/error";

type Props = {
  countries: Country[];
};

const Map = dynamic(() => import("@/app/components/map/index"), {
  ssr: false,
});

const HomeClient = ({ countries }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(null);
    setSelectedCountry(country);
    setOpenDetails(true);
  };

  const handleCloseDrawer = () => {
    setOpenDetails(false);
  };

  return (
    <div className="mx-auto flex lg:flex-row flex-col h-screen w-screen">
      <section className="h-3/4 lg:w-3/4 lg:h-full">
        <Map
          selectedCountry={selectedCountry}
          onCountrySelect={handleCountrySelect}
        />
      </section>

      <section className="relative h-1/4 lg:w-1/4 lg:h-full overflow-hidden">
        <div
          className={classNames(
            "absolute transition-transform duration-300 top-0 right-0 h-full w-full z-50",
            {
              "lg:translate-x-0 lg:translate-y-0": openDetails,
              "lg:translate-x-full lg:translate-y-0": !openDetails,

              "translate-x-0 translate-y-0": openDetails,
              "translate-x-0 translate-y-full": !openDetails,
            }
          )}
        >
          <div className="p-4 bg-white h-full">
            {openDetails && selectedCountry && (
              <div className="h-48 lg:h-auto overflow-auto">
                <CountryDetail
                  country={selectedCountry}
                  onClose={handleCloseDrawer}
                />
              </div>
            )}
          </div>
        </div>

        <div className="relative z-10">
          <SearchCountrie
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredCountries={filteredCountries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            setOpenDetails={setOpenDetails}
          />
        </div>
      </section>
    </div>
  );
};

export default HomeClient;
