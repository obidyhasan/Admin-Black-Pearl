import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import LoadingLayout from "./LoadingLayout";

const RootLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingLayout></LoadingLayout>;
  }

  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
