import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle, BsBuildingsFill } from "react-icons/bs";
import IconHome from "../../../assets/IconHome";

interface Props {
  position: number;
  index: number;
  icon: string;
}

function PropertySelection({ position, icon, index }: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-center border m-5 border-solid bg-white ${
        index == position
          ? "transition-color duration-500 border-blue-600"
          : "border-slate-300"
      } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl p-2 bg-white`}
      onClick={() => {}}
    >
      <div className="m-1 flex flex-row items-center">
        {index == position ? (
          <AiFillCheckCircle className="text-teal-600" />
        ) : (
          <BsCircle className="text-slate-300" />
        )}
        <h2 className="mx-2">House</h2>
      </div>
    </div>
  );
}

export default PropertySelection;
