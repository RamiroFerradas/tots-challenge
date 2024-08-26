import { HomeClient } from "@/app/components";
import { getCountriesWithCoordinates } from "@/app/services";

const Home = async () => {
  const countries = await getCountriesWithCoordinates();

  return <HomeClient countries={countries} />;
};

export default Home;
