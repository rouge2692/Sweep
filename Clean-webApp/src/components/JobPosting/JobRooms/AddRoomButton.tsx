import { MdAddCircleOutline } from "react-icons/md";

function AddRoom() {
  return (
    <div className="w-full flex flex-col items-center justify-center hover:cursor-pointer hover:opacity-50 hover:shadow-md border-2 border-dashed border-gray-500 rounded-lg mb-5">
      <div className="bg-white w-full h-full flex flex-col items-center p-2 rounded-lg">
        <MdAddCircleOutline className="size-5 md:size-7 text-gray-500 mx-3" />
        <h1 className="text-gray-500 text-center text-sm">Add more rooms</h1>
      </div>
    </div>
  );
}

export default AddRoom;
