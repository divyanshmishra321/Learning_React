import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import Spinner from "./Components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const Outputdata = await res.json();
        // save data into a Variable
        setCourses(Outputdata.data);
      } catch (error) {
        toast.error("Something Went Wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-500">
        <div>
          <Navbar />
        </div>
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center min-h-[50vh]">
          {Loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
