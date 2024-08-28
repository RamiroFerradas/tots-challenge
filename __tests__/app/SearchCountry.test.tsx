import { render, screen, fireEvent } from "@testing-library/react";
import { SearchCountry, CountryDetail } from "@/app/components";
import { mockCountries } from "@/__mocks__/mockCountries";
import { Country } from "@/app/models/country";

describe("SearchCountry", () => {
  const country: Country = mockCountries[0];

  const setSelectedCountry = jest.fn();
  const setOpenDetails = jest.fn();

  const renderComponent = (countries: Country[] = mockCountries) =>
    render(
      <SearchCountry
        selectedCountry={null}
        setSelectedCountry={setSelectedCountry}
        setOpenDetails={setOpenDetails}
        countries={countries}
      />
    );

  it("renders the search input", () => {
    renderComponent();
    expect(screen.getByPlaceholderText("Buscar país...")).toBeInTheDocument();
  });

  it("displays country in the list", () => {
    renderComponent();
    expect(screen.getByText("United States")).toBeInTheDocument();
  });

  it("filters countries based on search term", () => {
    renderComponent();

    fireEvent.change(screen.getByPlaceholderText("Buscar país..."), {
      target: { value: "United States" },
    });

    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(
      screen.queryByText("No se encontraron paises")
    ).not.toBeInTheDocument();
  });

  it("shows 'No se encontraron paises' when no country matches the search term", () => {
    renderComponent();

    fireEvent.change(screen.getByPlaceholderText("Buscar país..."), {
      target: { value: "Nonexistent Country" },
    });

    expect(screen.getByText("No se encontraron paises")).toBeInTheDocument();
  });

  it("calls setSelectedCountry when a country is clicked", () => {
    renderComponent();
    fireEvent.click(screen.getByText("United States"));
    expect(setSelectedCountry).toHaveBeenCalledWith(country);
  });

  it("calls setOpenDetails with true when 'Info' button is clicked", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Info"));
    expect(setOpenDetails).toHaveBeenCalledWith(true);
  });
});
