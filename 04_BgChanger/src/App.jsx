import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className=" w-full h-screen flex" style={{ backgroundColor: color }}>
      <div className="flex fixed  flex-wrap m-auto gap-3 shadow-lg bg-slate-50  py-2 rounded-3xl  w-fit px-10 bottom-10 inset-x-0 ">
        <button
          onClick={() => {
            setColor("red");
          }}
          className=" outline-none shadow-md px-4 py-1 rounded-full text-white  bg-red-500"
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("Teal");
          }}
          className=" outline-none shadow-md px-4 py-1 rounded-full text-white  bg-teal-500"
        >
          Teal
        </button>
        <button
          onClick={() => {
            setColor("Blue");
          }}
          className=" outline-none shadow-md px-4 py-1 rounded-full text-white  bg-blue-500"
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className=" outline-none shadow-md px-4 py-1 rounded-full text-white  bg-yellow-500"
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColor("pink");
          }}
          className=" outline-none shadow-md px-4 py-1 rounded-full text-white  bg-pink-500"
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
