import { TfiBrushAlt } from "react-icons/tfi";

function NavBar() {
  return (
    <nav className="p-3 flex items-center justify-between bg-white">
      <div className="flex flex-rowitems-center justify-center items-center m-1 mx-3">
        <TfiBrushAlt className="text-teal-600 size-10" />
        <h1 className="text-2xl font-sans font-semibold text-teal-600 p-2">
          Sweep
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
