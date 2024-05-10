import { PiBroom } from "react-icons/pi";
import { TfiBrushAlt } from "react-icons/tfi";
import { IoPerson } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="p-3 sm:px-5 flex items-center justify-between bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <div
          className="hover:cursor-pointer"
          onClick={() => navigate("/HomeMain")}
        >
          {/* <TfiBrushAlt className="text-pink-600 size-12" /> */}
          <PiBroom className="text-pink-600 size-10 sm:size-12" />
        </div>
        {/* <h1 className="text-2xl text-pink-600 font-sans font-semibold">
          sweep
        </h1> */}
      </div>
      {/* ^ Logo */}
      <div className="flex">
        <button className="sm:p-3 mr-2 text-pink-600 underline rounded-lg font-bold text-xs sm:text-base">
          Become a Cleaner
        </button>
        <button className="p-2 sm:p-3 sm:mr-2 sm:flex items-center border-2 border-pink-600 text-pink-600 rounded-full sm:rounded-lg">
          <IoPerson className="hidden sm:block text-pink-600 mr-2" />
          <h1 className="hidden sm:block">Sign in</h1>
          <IoPerson className="sm:hidden text-pink-600" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
