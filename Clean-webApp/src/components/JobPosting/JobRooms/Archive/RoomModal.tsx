import { useState } from "react";

interface Props {
  modalOpen: boolean;
}
function RoomModal({ modalOpen }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${
        open &&
        "fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 flex justify-center items-center"
      }`}
    >
      <div className="relative bg-white w-full max-w-md m-auto p-8 flex-col flex rounded-lg shadow-lg">
        <h1>carmelo yellow</h1>
      </div>
    </div>
  );
}

export default RoomModal;
