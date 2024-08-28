import { Country } from "@/app/models/country";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
type Props = {
  country: Country;
  setSelectedCountry: Dispatch<SetStateAction<Country | null>>;
  matchCountry: boolean;
  setOpenDetails: Dispatch<SetStateAction<boolean>>;
};
const CardCountry = ({
  country,
  setSelectedCountry,
  matchCountry,
  setOpenDetails,
}: Props) => {
  const handleClick = () => {
    setOpenDetails(true);
  };
  return (
    <div
      data-testid="CardCountry"
      className={`p-2 flex justify-between items-center cursor-pointer rounded ${
        matchCountry ? "bg-blue-200" : "bg-white"
      } hover:bg-blue-100`}
      onClick={() => setSelectedCountry(country)}
    >
      <div className="flex items-center gap-2">
        <Image
          src={country.imageUrl}
          alt={`Flag of ${country.name}`}
          width={40}
          height={40}
          className="object-cover rounded-md"
        />
        <span>{country.name}</span>
      </div>
      <button
        className="ml-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        onClick={handleClick}
      >
        Info
      </button>
    </div>
  );
};
export default CardCountry;
