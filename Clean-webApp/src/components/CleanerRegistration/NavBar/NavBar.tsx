import { PiBroom } from "react-icons/pi";
// import { TfiBrushAlt } from "react-icons/tfi";
// import { IoPerson } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="p-3 sm:px-5 flex items-center justify-between bg-whites">
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
    </nav>
  );
}

export default NavBar;
