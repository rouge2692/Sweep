import { PiBroom } from "react-icons/pi";
import { TfiBrushAlt } from "react-icons/tfi";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="p-3 px-5 flex items-center justify-between bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <div
          className="m-1 hover:cursor-pointer"
          onClick={() => navigate("/HomeMain")}
        >
          {/* <TfiBrushAlt className="text-pink-600 size-12" /> */}
          <PiBroom className="text-pink-600 size-12" />
        </div>
        {/* <h1 className="text-2xl text-pink-600 font-sans font-semibold">
          sweep
        </h1> */}
      </div>
      {/* ^ Logo */}
      <div className="flex">
        <button className="p-3 mr-2 bg-pink-600 text-white rounded-lg font-bold">
          Become a Cleaner
        </button>
        <button className="p-3 mr-2 border-2 border-pink-600 text-pink-600 rounded-lg">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
