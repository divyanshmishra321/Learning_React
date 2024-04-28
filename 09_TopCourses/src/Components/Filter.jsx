import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 px-3 justify-center">
      {filterData.map((data) => {
        const filterclickHandler = () => {
          setCategory(data.title);
          console.log(data.title);
        };

        return (
          <button
            className={`text-lg px-4 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2
            ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "border-transparent bg-opacity-40"
            }
            `}
            key={data.id}
            onClick={() => filterclickHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
