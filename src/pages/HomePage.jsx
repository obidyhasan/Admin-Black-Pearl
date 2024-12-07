import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const HomePage = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout} className="btn">
        Logout
      </button>
    </div>
  );
};

export default HomePage;
