import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { CountryDetail } from "@/app/components";
import { mockCountries } from "../../__mocks__/mockCountries";
const country = mockCountries[0];

describe("CountryDetail", () => {
  it("renders the country details correctly", () => {
    function expectTextContent(label: string, value: string) {
      expect(
        screen.getByText((content, element) => {
          return element?.textContent === `${label} ${value}`;
        })
      ).toBeInTheDocument();
    }
    render(<CountryDetail country={country} onClose={jest.fn()} />);
    const flagImage = screen.getByAltText("Flag of United States");
    expect(flagImage).toBeInTheDocument();
    const src = flagImage.getAttribute("src");
    expect(src).toBeDefined();
    expect(src).toMatch(/url=https%3A%2F%2Fexample\.com%2Fflag-us\.png/);
    expect(screen.getByText(`${country.name} ${country.emoji}`));
    expectTextContent("Nombre Nativo:", country.native);
    expectTextContent("Capital:", country.capital);
    expectTextContent("Continente:", country.continent.name);
    expectTextContent("Moneda:", country.currency);
    expectTextContent("Código de Teléfono:", country.phone);
    expectTextContent(
      "Idiomas:",
      country.languages.map((lang) => lang.name).join(", ")
    );
  });

  it("calls onClose when the close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(<CountryDetail country={country} onClose={onCloseMock} />);

    // Simula un clic en el botón de cerrar
    const closeButton = screen.getByLabelText("close");
    fireEvent.click(closeButton);

    // Verifica que onClose se ha llamado una vez
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("renders without crashing when required props are provided", () => {
    render(<CountryDetail country={country} onClose={jest.fn()} />);

    // Verifica que el componente se renderizó correctamente
    expect(screen.getByText("United States 🇺🇸")).toBeInTheDocument();
  });
});
