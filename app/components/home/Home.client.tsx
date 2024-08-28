"use client";
import { useState } from "react";
import { Country } from "@/app/models/country";
import dynamic from "next/dynamic";
import classNames from "classnames";
import CountryDetail from "@/app/components/countryDetail/CountryDetail";
import SearchCountry from "@/app/components/searchCountry/SearchCountry";

type Props = {
  countries: Country[];
};

const Map = dynamic(() => import("@/app/components/map/Map"), {
  ssr: false,
});

const HomeClient = ({ countries }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(null);
    setSelectedCountry(country);
    setOpenDetails(true);
  };

  const handleCloseDrawer = () => {
    setOpenDetails(false);
  };

  return (
    <div
      className="mx-auto flex lg:flex-row flex-col h-screen w-screen"
      data-testid="Map"
    >
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
          <div className="lg:p-4 bg-white h-full">
            {openDetails && selectedCountry && (
              <div
                data-testid="CountryDetails"
                className="h-48 lg:h-auto overflow-auto"
              >
                <CountryDetail
                  country={selectedCountry}
                  onClose={handleCloseDrawer}
                />
              </div>
            )}
          </div>
        </div>

        <div className="relative z-10">
          <SearchCountry
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            setOpenDetails={setOpenDetails}
            countries={countries}
          />
        </div>
      </section>
    </div>
  );
};

export default HomeClient;
