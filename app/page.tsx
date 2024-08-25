import { HomeClient } from "@/app/components";
import { getFilteredCountriesWithCoordinates } from "@/app/services";

const Home = async () => {
  const countries = await getFilteredCountriesWithCoordinates();

  return <HomeClient countries={countries} />;
};

export default Home;
