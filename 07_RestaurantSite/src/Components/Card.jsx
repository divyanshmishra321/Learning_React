import React from "react";

function Card({ menuData }) {
  console.log(menuData);
  return (
    <>
      <div
        key={curElement.id}
        className={`text-center bg-yellow-100 h-[100vh] p-10  text-lg  font-semibold `}
      >
        <div className="card-body w-[20rem] h-fit p-4 bg-white shadow-lg rounded-md mx-4 ">
          <div className="bg-cyan-200 rounded-md px-4  py-2">
            <span>{curElement.id}</span>
            <h1 className="">{curElement.name}</h1>
            <span>{curElement.price}</span>
            <img
              className="shadow-sm  border-2 border-red-950"
              src={curElement.image}
              alt=""
            />
            <p className="text-justify ">{curElement.Description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
