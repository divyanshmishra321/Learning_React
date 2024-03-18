import { useEffect } from "react";
import { useState } from "react";
import { useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "./[]{}()<>*+-=!?^$|~`";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    console.log("setPassword run");
  }, [length, numbersAllowed, charAllowed, setPassword]);

  const copyPassToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex items-center flex-col w-full max-w-md mx-auto shadow-md rounded-lg p-4 m-10 text-orange-500 bg-gray-400 ">
        <h1 className="text-white text-center mb-4 text-lg ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3 text-white">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              id="numberInput"
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
