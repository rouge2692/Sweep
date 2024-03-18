import NavOps from "./NavOps";
import Buttons from "./Buttons";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="p-3 flex items-center justify-between sticky top-0 z-50 bg-white">
      <div className="flex bg-blue-600 items-center justify-center m-1">
        <h1 className="text-2xl font-sans font-semibold text-white p-2 mx-5">
          sweep
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
