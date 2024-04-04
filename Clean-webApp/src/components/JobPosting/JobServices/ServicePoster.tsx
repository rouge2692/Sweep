// // Navigate
import { Link } from "react-router-dom";
import { postHandleJobCreation } from "../../../connections/HandleJobCreation";

interface Props {
  title: string;
  descript: string;
  route: string;
}

function ServicePoster({ title, descript, route }: Props) {
  return (
    <div className="border-2 p-3 rounded-2xl border-gray-300 hover:cursor-pointer hover:border-teal-600 transition-colors duration-200 sm:w-1/4 my-2 mx-4 sm:m-2 flex flex-col justify-between items-center">
      <div className="flex flex-col items-center">
        <h1>img</h1>
        <h1 className="text-lg font-bold text-center">{title}</h1>
        <h2 className="text-center text-sm sm:text-base">{descript}</h2>
      </div>

      <Link
        to={route}
        className="bg-teal-600 text-white font-bold w-2/3 rounded-lg p-2 mt-3 text-center hover:opacity-75 transition-opacity duration-200"
        onClick={() => null}
      >
        SELECT
      </Link>
    </div>
  );
}

export default ServicePoster;
