import { useState } from "react";

import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

interface Props {}

function ServiceItem() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      onClick={() => setChecked(!checked)}
      className="flex flex-row items-center border-2 px-2 shadow-md rounded-lg hover:opacity-50"
    >
      {checked ? (
        <MdCheckBox className="mr-2" onClick={() => setChecked(!checked)} />
      ) : (
        <MdCheckBoxOutlineBlank
          className="mr-2"
          onClick={() => setChecked(!checked)}
        />
      )}
      <h1 className="text-sm lg:text-lg">yeoyeo yeoooo</h1>
    </button>
  );
}

export default ServiceItem;
