import { PiBroom } from "react-icons/pi";
// import { TfiBrushAlt } from "react-icons/tfi";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="p-3 flex items-center justify-between bg-white">
      <div
        className="flex flex-row items-center justify-center m-1 hover:cursor-pointer"
        onClick={() => navigate("/HomeMain")}
      >
        {/* <TfiBrushAlt className="text-pink-600 size-12" /> */}
        <PiBroom className="text-pink-600 size-12" />
        {/* <h1 className="text-2xl font-sans font-semibold text-pink-600">
          Sweep
        </h1> */}
      </div>
    </nav>
  );
}

export default NavBar;
