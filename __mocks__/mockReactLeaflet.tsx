const MapContainer = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="MapContainer">{children}</div>
);

const TileLayer = () => <div data-testid="TileLayer" />;

const Marker = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="Marker">{children}</div>
);

const Popup = ({ children }: { children?: React.ReactNode }) => (
  <div data-testid="Popup">{children}</div>
);
const useMap = () => ({
  fitBounds: jest.fn(),
  flyTo: jest.fn(),
});

export { MapContainer, TileLayer, Marker, Popup, useMap };
