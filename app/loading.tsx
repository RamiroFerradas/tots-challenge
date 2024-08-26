import { CircularProgress } from "@mui/material";

const loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <CircularProgress />
    </div>
  );
};
export default loading;
