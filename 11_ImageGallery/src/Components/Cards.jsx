import React from "react";

const Cards = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg h-[500px]">
        <img
          className="object-cover w-full h-[50%]  "
          src={image.webformatURL}
          alt=""
        />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-800 text-xl">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views:</strong> {image.views}
            </li>
            <li>
              <strong>Downloads:</strong> {image.downloads}
            </li>
            <li>
              <strong>Likes::</strong> {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
