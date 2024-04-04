import { MdAddCircleOutline } from "react-icons/md";

function AddRoom() {
  return (
    <div className="w-full flex flex-col items-center justify-center hover:cursor-pointer hover:opacity-50 hover:shadow-md border-2 border-dashed border-gray-400 rounded-lg p-2 mb-5">
      <MdAddCircleOutline className="size-5 md:size-7 text-gray-400 mx-3" />
      <h1 className="text-gray-400 text-center text-sm">Add more rooms</h1>
    </div>
  );
}

export default AddRoom;
