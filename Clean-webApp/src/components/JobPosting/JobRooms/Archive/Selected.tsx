import { useState } from "react";
interface Props {
  index: number;
  data: string;
  removeFromSelection: (itemToRemove: string) => void;
}

function SelectedRow({ index, data, removeFromSelection }: Props) {
  const [amount, setAmount] = useState(1);

  const handleAmount = () => setAmount((pre) => pre + 1);

  const handleRedAmount = (cate: string) => {
    if (amount > 1) {
      setAmount((pre) => pre - 1);
    } else {
      removeFromSelection(cate);
    }
  };
  return (
    <tr
      key={index}
      className="bg-white rounded-md border flex p-3 items-center justify-between my-3"
    >
      <div className="flex-row flex bg-red-50">
        <h1 className="m-2 bg-yellow-50">img</h1>
        <h1 className="m-2 ml-10 bg-yellow-50">{data}</h1>
      </div>
      <div className="flex-row flex justify-between bg-red-50">
        <button
          className="px-3 p-2 mx-2 rounded-lg text-white font-bold bg-red-800"
          onClick={() => handleRedAmount(data)}
        >
          -
        </button>
        <h1 className="px-3 p-2 mx-2 rounded-lg font-bold bg-slate-300">
          {amount}
        </h1>
        <button
          className="px-3 p-2 mx-2 rounded-lg text-white font-bold bg-green-800"
          onClick={handleAmount}
        >
          +
        </button>
      </div>
    </tr>
  );
}

export default SelectedRow;
