import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { HomeClient, SearchCountry } from "@/app/components";
import { mockCountries } from "@/__mocks__/mockCountries";

describe("HomeClient", () => {
  it("renders Map component and displays CountryDetail on card click", async () => {
    const mockSetSelectedCountry = jest.fn();
    const mockSetOpenDetails = jest.fn();

    render(<HomeClient countries={mockCountries} />);

    render(
      <SearchCountry
        selectedCountry={null}
        setSelectedCountry={mockSetSelectedCountry}
        setOpenDetails={mockSetOpenDetails}
        countries={mockCountries}
      />
    );

    expect(screen.getByTestId("Map")).toBeInTheDocument();

    expect(screen.queryByTestId("CountryDetail")).not.toBeInTheDocument();

    const cardCountries = screen.getAllByTestId("CardCountry");
    fireEvent.click(cardCountries[0]);

    const infoButtons = screen.getAllByText("Info", { selector: "button" });
    fireEvent.click(infoButtons[0]);

    await waitFor(() => {
      expect(screen.getByTestId("CountryDetail")).toBeInTheDocument();
    });
  });
});
