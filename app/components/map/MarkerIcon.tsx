import { FaMapMarkerAlt } from "react-icons/fa";

type Props = {};
const MarkerIcon = (props: Props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "8px",
        boxShadow: "0 0 4px rgba(0,0,0,0.2)",
      }}
    >
      <FaMapMarkerAlt color="#ff4500" size={24} />
    </div>
  );
};
export default MarkerIcon;
