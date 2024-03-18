import React, { useState } from "react";

interface Props {
  data: { [key: string]: string | number };
  getSerRoom: (title: string, amount: number) => void;
}

function SerOptions({ data, getSerRoom }: Props) {
  const [amount, setAmount] = useState(0);

  const handleAmount = (oper: string, amount: number) => {
    if (oper == "+") {
      setAmount((preAmount) => preAmount + 1);
    } else {
      if (amount == 0) {
        return null;
      } else {
        setAmount((preAmount) => preAmount - 1);
      }
    }
  };

  return (
    <div className="flex flex-row shadow-lg justify-between p-3 items-center mb-5 bg-slate-50 rounded-md">
      <div className="flex flex-row">
        <h1 className="mx-5">img</h1>
        <h1 className="font-bold">{data.Category}</h1>
      </div>
      <div className="flex flex-row">
        <button
          onClick={() => handleAmount("-", amount)}
          className="bg-red-800 p-2 px-4 rounded-lg font-bold text-white hover:opacity-80 transition-opacity duration-200"
        >
          -
        </button>
        <h1 className="bg-slate-200 p-2 px-5 rounded-lg font-bold text-black mx-2">
          {amount}
        </h1>
        <button
          onClick={() => handleAmount("+", amount)}
          className="p-2 bg-green-800 px-4 rounded-lg font-bold text-white hover:opacity-80 transition-opacity duration-200"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SerOptions;
