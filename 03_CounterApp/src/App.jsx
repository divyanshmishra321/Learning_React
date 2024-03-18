import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <>
      <div className="flex w-[100vw] h-[100vh] justify-center items-center bg-[#344151] flex-col gap-10">
        <div className="text-[#0398d4] font-medium text-2xl">Counter App</div>
        <div className="flex w-auto h-auto bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
          <button
            onClick={decreaseHandler}
            className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
          >
            -
          </button>
          <div className="text-5xl font-bold gap-12">{count}</div>
          <button
            className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
            onClick={increaseHandler}
          >
            +
          </button>
        </div>
        <button
          className="bg-[#0398d4] text-white px-5 py-2 rounded-sm "
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
