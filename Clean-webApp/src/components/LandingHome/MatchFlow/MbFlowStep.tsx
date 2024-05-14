import React from "react";

interface Props {
  stepNum: number;
  stepDescrip: string;
  stepImage: string;
}

function MbFlowStep({ stepNum, stepDescrip, stepImage }: Props) {
  return (
    <div className="bg-white relative shadow-2xl lg:shadow-none text-center m-2 border rounded-2xl">
      <div className="rounded-t-2xl relative block bg-pink-600">
        <h1 className="font-bold text-3xl text-white">{stepNum}</h1>
      </div>

      <img src={`src/assets/${stepImage}.png`} className="rounded-2xl" />
      <h1 className="font-bold relative bottom-2 text-lg lg:text-xl text-slate-600">
        {stepDescrip}
      </h1>
    </div>
  );
}

export default MbFlowStep;
