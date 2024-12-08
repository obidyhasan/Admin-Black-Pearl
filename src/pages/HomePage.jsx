import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white shadow-sm rounded-md p-5">
      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
