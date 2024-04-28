import { useState } from "react";
import Data from "./Api/Data";
import Tours from "./Components/Tours";
import Refresh from "./Components/Refresh";
import "./App.css";

function App() {
  const [tours, setTours] = useState(Data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    console.log(id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return <Refresh setTour={setTours} data={Data} />;
  }
  return (
    <>
      <div className=" w-full  h-full flex ">
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </>
  );
}

export default App;
