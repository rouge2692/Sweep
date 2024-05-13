import React from "react";

interface Props {
  stepNum: number;
  stepDescrip: string;
  stepImage: string;
}

function FlowStep({ stepNum, stepDescrip, stepImage }: Props) {
  return (
    <div className="bg-white relative shadow-xl lg:shadow-2xl flex justify-center text-center m-2 border border-slate-300 rounded-2xl p-3">
      <h1 className="font-bold absolute top-1 text-5xl text-slate-600">
        {stepNum}
      </h1>
      <img src={`src/assets/${stepImage}.png`} className="rounded-2xl" />
      <h1 className="font-bold absolute bottom-2 text-xl">{stepDescrip}</h1>
    </div>
  );
}

export default FlowStep;
