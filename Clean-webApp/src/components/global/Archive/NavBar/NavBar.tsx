import NavOps from "./NavOps";
import Buttons from "./Buttons";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

import { Link } from "react-router-dom";

function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="p-3 flex h-16 shadow-xl items-center justify-between sticky z-50">
      <div className="flex bg-blue-600 items-center justify-center">
        <h1 className="text-2xl font-sans font-semibold text-white mx-5">
          sweep
        </h1>
      </div>

      <div className="hidden w-full sm:flex justify-between items-center">
        <div className="w-full flex justify-center items-center">
          <NavOps />
        </div>
        <div>
          <Link
            to="/JourneyStart"
            className="w-32 duration-500 hover:bg-blue-600 hover:text-white bg-blue-300 text-black border-black rounded-full font-bold p-3"
          >
            Order
          </Link>
        </div>
      </div>

      <div className="sm:hidden relative hover:bg-gray-200 duration-500 rounded-full p-3">
        {menuVisible === false && (
          <RxHamburgerMenu
            className="text-4xl font-bold"
            onClick={() => setMenuVisible(true)}
          />
        )}
        {menuVisible && (
          <RxCross1
            className="text-4xl font-bold"
            onClick={() => setMenuVisible(false)}
          />
        )}
        {menuVisible && (
          <div className="bg-white shadow-2xl absolute top-16 right-0 p-5">
            <NavOps />
            <div className="mt-3">
              <Link
                to="/JourneyStart"
                className="w-32 duration-500 hover:bg-blue-600 hover:text-white bg-blue-300 text-black border-black rounded-full font-bold p-3"
              >
                Order
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
