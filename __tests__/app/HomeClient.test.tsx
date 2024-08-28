import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { mockCountries } from "@/__mocks__/mockCountries";
import { CountryDetail, HomeClient, SearchCountry } from "@/app/components";

describe("HomeClient", () => {
  it("renders Map component and displays CountryDetail on card click", async () => {
    const mockSetSelectedCountry = jest.fn();
    const mockSetOpenDetails = jest.fn();
    const onClose = jest.fn();
    render(<HomeClient countries={mockCountries} />);
    render(
      <SearchCountry
        selectedCountry={mockCountries[0]}
        setSelectedCountry={mockSetSelectedCountry}
        setOpenDetails={mockSetOpenDetails}
        countries={mockCountries}
      />
    );

    expect(screen.getByTestId("Map")).toBeInTheDocument();
    expect(screen.queryByTestId("CountryDetail")).not.toBeInTheDocument();

    const cardCountries = screen.getAllByTestId("CardCountry");
    fireEvent.click(cardCountries[0]);
    render(<CountryDetail country={mockCountries[0]} onClose={onClose} />);
    await waitFor(() => {
      expect(screen.getByTestId("CountryDetail")).toBeInTheDocument();
    });
  });
});
