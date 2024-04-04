import { useState } from "react";

interface Props {
  keys: number;
  data: { [key: string]: string };
}

function ServiceSelection({ keys, data }: Props) {
  const [sel, setSel] = useState(false);
  return (
    <div
      key={keys}
      className={`${
        sel
          ? "border bg-teal-600 text-white font-bold"
          : "border border-slate-300"
      } text-sm p-2 md:p-3 m-1 rounded-full bg-white border-collapse hover:cursor-pointer`}
      onClick={() => setSel(!sel)}
    >
      {data.Service}
    </div>
  );
}

export default ServiceSelection;
