import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import Search from "./Components/Search";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    var API_KEY = "21250474-316fdf027d3d6a50410dbf7e1";

    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <div className="container mx-auto p-7">
        <Search searchtext={(text)=> setTerm(text)}/>
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32 ">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <Cards key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
