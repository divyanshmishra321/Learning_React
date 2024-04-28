import React from "react";
import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <>
      <div className="m-auto">
        <div>
          <h1 className="text-center bg-slate-100 w-[300px] p-2 rounded-md my-2 border-2 border-black border-dashed font-sans font-bold text-lg mx-auto">
            Plan With Love
          </h1>
        </div>
        <div className="flex item-center justify-center flex-wrap ">
          {tours.map((tour) => {
            return <Card {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Tours;
