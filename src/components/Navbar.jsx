import { useContext } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sticky top-0 bg-white">
      <div className="w-full h-[72px] px-5 flex items-center justify-between">
        <div>
          <label htmlFor="my-drawer-2" className="lg:hidden btn text-2xl">
            <HiMenuAlt2 />
          </label>
        </div>
        <div className="">
          <button onClick={logout} className="btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
