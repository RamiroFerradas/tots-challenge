import { fireEvent, render, screen } from "@testing-library/react";
import { Map } from "@/app/components";
import { Country } from "@/app/models/country";
import { mockCountries } from "../../__mocks__/mockCountries";

describe("Map", () => {
  const country: Country = mockCountries[0];
  it("renders the map with the selected country marker", () => {
    render(<Map selectedCountry={country} onCountrySelect={jest.fn()} />);

    expect(screen.getByTestId("MapContainer")).toBeInTheDocument();

    expect(screen.getByTestId("TileLayer")).toBeInTheDocument();

    const markerElement = screen.getByTestId("Marker");
    expect(markerElement).toBeInTheDocument();

    fireEvent.click(markerElement);
    const popup = screen.getByTestId("Popup");
    expect(popup).toHaveTextContent(country.name);
    expect(popup).toHaveTextContent(country.continent.name);
  });
});
