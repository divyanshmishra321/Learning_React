import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  let allCourses = [];
  const [likedCourse, setLikedCourse] = useState([]);
  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((Course) => {
          allCourses.push(Course);
        });
      });
      return allCourses;
    } else {
      //Sirf Specific category ka data pass krunga
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <div>
          <p>No Data Found</p>
        </div>
      ) : (
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourse={likedCourse}
              setLikedCourse={setLikedCourse}
            />
          );
        })
      )}
    </div>
  );
};

export default Cards;
