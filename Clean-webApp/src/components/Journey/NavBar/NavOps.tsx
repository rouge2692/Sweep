import { Link } from "react-router-dom";

function NavOps() {
  let navOps = ["Services", "Market", "Planner"];

  return (
    <ul className="sm:flex">
      {navOps.map((navop) => (
        <li className="p-3">
          <Link
            to="/Profile"
            className="p-2 text-black font-bold hover:bg-blue-300 duration-500 hover:text-white rounded-full"
          >
            {navop}
          </Link>
          {/* <a
            href="#"
            className="p-2 text-black font-bold hover:bg-blue-300 duration-500 hover:text-white rounded-full"
          >
            {navop}
          </a> */}
        </li>
      ))}
    </ul>
  );
}

export default NavOps;
