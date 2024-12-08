import { useContext, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../providers/AuthProvider";
import LoadingLayout from "./LoadingLayout";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { FiBox, FiUser, FiShoppingCart, FiPieChart } from "react-icons/fi";
import { BsBoxes } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { LuImage } from "react-icons/lu";

const RootLayout = () => {
  const { loading } = useContext(AuthContext);
  const drawerToggleRef = useRef(null);
  if (loading) {
    return <LoadingLayout></LoadingLayout>;
  }

  // Close the drawer programmatically
  const closeDrawer = () => {
    if (window.innerWidth < 1024) {
      drawerToggleRef.current.checked = false; // Uncheck the drawer toggle
    }
  };

  return (
    <div className="font-interFont ">
      <div className="drawer lg:drawer-open h-screen">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerToggleRef}
        />
        <div className="drawer-content ">
          {/* Page content here */}

          <Navbar></Navbar>

          <section className="bg-[#eff4f8] p-5">
            <Outlet></Outlet>
          </section>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay h-full"
          ></label>
          <ul className="menu bg-white text-base-content min-h-full w-80 p-0">
            {/* Sidebar content here */}

            <div className="sticky top-0 bg-white z-10 pt-5 px-5">
              <div className="flex justify-between items-center ">
                <h1 className="font-tekoFont text-3xl">Black Pearl</h1>
                <label
                  onClick={closeDrawer}
                  className="border hover:border-blue-500 cursor-pointer rounded lg:hidden hover:text-blue-500 p-2  duration-300"
                >
                  <IoClose className="text-xl " />
                </label>
              </div>

              <hr className="mt-4 -mx-4" />
            </div>

            <div className="p-5">
              <h2 className="uppercase font-semibold text-gray-400 text-xs mb-3">
                All Pages
              </h2>

              <div>
                {/* Dashboard */}
                <div className="collapse collapse-arrow rounded-none ">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    className="peer"
                    defaultChecked
                  />
                  <div className=" collapse-title peer-checked:border-none border border-gray-100 flex rounded-md items-center gap-3 peer-checked:bg-blue-100 peer-checked:text-blue-500 mb-2">
                    <MdOutlineSpaceDashboard className="text-xl " />
                    <h2 className="font-semibold text-base ">Dashboard</h2>
                  </div>
                  <div className="collapse-content flex flex-col ">
                    <NavLink
                      to={"/"}
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Home 01</h1>
                    </NavLink>
                    <NavLink
                      onClick={closeDrawer}
                      to={"/home02"}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Home 02</h1>
                    </NavLink>
                    <NavLink
                      onClick={closeDrawer}
                      to={"/home03"}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Home 03</h1>
                    </NavLink>
                  </div>
                </div>

                {/* E-commerce */}
                <div className="collapse collapse-arrow rounded-none ">
                  <input type="radio" name="my-accordion-2" className="peer" />
                  <div className=" collapse-title peer-checked:border-none border border-gray-100 flex rounded-md items-center gap-3 peer-checked:bg-blue-100 peer-checked:text-blue-500 mb-2">
                    <FiShoppingCart className="text-xl " />
                    <h1 className="font-semibold text-base ">Ecommerce</h1>
                  </div>
                  <div className="collapse-content flex flex-col ">
                    <NavLink
                      to={"/addProduct"}
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Add Product</h1>
                    </NavLink>
                    <NavLink
                      to={"/productList"}
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Product List</h1>
                    </NavLink>
                  </div>
                </div>

                {/* Category */}
                <div className="collapse collapse-arrow rounded-none ">
                  <input type="radio" name="my-accordion-2" className="peer" />
                  <div className=" collapse-title peer-checked:border-none border border-gray-100 flex rounded-md items-center gap-3 peer-checked:bg-blue-100 peer-checked:text-blue-500 mb-2">
                    <FiBox className="text-xl " />
                    <h2 className="font-semibold text-base ">Category</h2>
                  </div>
                  <div className="collapse-content flex flex-col ">
                    <NavLink
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Add Category</h1>
                    </NavLink>
                    <NavLink
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Category List</h1>
                    </NavLink>
                  </div>
                </div>

                {/* Attributes */}
                <div className="collapse collapse-arrow rounded-none ">
                  <input type="radio" name="my-accordion-2" className="peer" />
                  <div className=" collapse-title peer-checked:border-none border border-gray-100 flex rounded-md items-center gap-3 peer-checked:bg-blue-100 peer-checked:text-blue-500 mb-2">
                    <BsBoxes className="text-xl " />
                    <h2 className="font-semibold text-base ">Attributes</h2>
                  </div>
                  <div className="collapse-content flex flex-col ">
                    <NavLink
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Add Category</h1>
                    </NavLink>
                    <NavLink
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Category List</h1>
                    </NavLink>
                  </div>
                </div>

                {/* Order */}
                <div className="collapse collapse-arrow rounded-none ">
                  <input type="radio" name="my-accordion-2" className="peer" />
                  <div className=" collapse-title peer-checked:border-none border border-gray-100 flex rounded-md items-center gap-3 peer-checked:bg-blue-100 peer-checked:text-blue-500 mb-2">
                    <FaRegFileAlt className="text-xl " />
                    <h2 className="font-semibold text-base ">Order</h2>
                  </div>
                  <div className="collapse-content flex flex-col ">
                    <NavLink
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Order List</h1>
                    </NavLink>
                    <NavLink
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Order Tracking</h1>
                    </NavLink>
                  </div>
                </div>

                {/* User */}
                <div className="collapse collapse-arrow rounded-none ">
                  <input type="radio" name="my-accordion-2" className="peer" />
                  <div className=" collapse-title peer-checked:border-none border border-gray-100 flex rounded-md items-center gap-3 peer-checked:bg-blue-100 peer-checked:text-blue-500 mb-2">
                    <FiUser className="text-xl " />
                    <h2 className="font-semibold text-base ">User</h2>
                  </div>
                  <div className="collapse-content flex flex-col ">
                    <NavLink
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>All User</h1>
                    </NavLink>
                  </div>
                </div>

                {/* Gallery */}
                <div className="collapse collapse-arrow rounded-none ">
                  <input type="radio" name="my-accordion-2" className="peer" />
                  <div className=" collapse-title peer-checked:border-none border border-gray-100 flex rounded-md items-center gap-3 peer-checked:bg-blue-100 peer-checked:text-blue-500 mb-2">
                    <LuImage className="text-xl " />
                    <h2 className="font-semibold text-base ">Gallery</h2>
                  </div>
                  <div className="collapse-content flex flex-col ">
                    <NavLink
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Add Photo</h1>
                    </NavLink>
                    <NavLink
                      onClick={closeDrawer}
                      className={({ isActive }) =>
                        `flex items-center justify-start text-sm p-2 gap-2 font-medium 
                       hover:text-blue-400 transform hover:translate-x-2 duration-300 ${
                         isActive ? "text-blue-500 underline" : ""
                       }`
                      }
                    >
                      <VscDebugBreakpointLogUnverified />
                      <h1>Order Tracking</h1>
                    </NavLink>
                  </div>
                </div>

                {/* Report */}
                <div className="collapse  rounded-none ">
                  <input type="radio" name="my-accordion-2" className="peer" />
                  <div className=" collapse-title peer-checked:border-none border border-gray-100 flex rounded-md items-center gap-3 peer-checked:bg-blue-100 peer-checked:text-blue-500 mb-2">
                    <FiPieChart className="text-xl " />
                    <h2 className="font-semibold text-base ">Report</h2>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
