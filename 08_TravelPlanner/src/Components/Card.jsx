import React, { useState } from "react";

function Card({ id, imageUrl, name, info, tourPrice , removeTour}) {
  const [readmore, setReadmore] = useState(false);
  const description = `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  

  return (
    <div className="Card  w-[20rem] min-h-max m-6 bg-slate-100 p-6 rounded-lg shadow-lg flex flex-col gap-2 ">
      <img className="rounded-lg" src={imageUrl} alt="" />
      <div className="flex flex-col gap-2  ">
        <p className="text-lg font-bold text-green-700 ">{tourPrice}</p>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-justify">
          {description}
          <span onClick={readmoreHandler}>
            {" "}
            {readmore ? "Show Less" : "Read More"}
          </span>
        </p>
      </div>

      <button
        className="text-center bg-red-200 w-[90%] p-1 rounded-md my-2 border-2 border-black border-dashed font-sans font-semibold text-lg mx-auto"
        onClick={()=> removeTour(id)}
      >
        Not Intrested
      </button>
    </div>
  );
}

export default Card;
