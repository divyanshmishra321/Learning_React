import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourse, setLikedCourse }) => {
  const clickHandler = () => {
    if (likedCourse.includes(course.id)) {
      //pehle se liked hai iskka mtlb and then isko likedCourse se hata do or sirf wo wale filter krdo jinki Course ID current wale se na match ho
      setLikedCourse((prev) => prev.filter((cid) => cid !== course.id));
      toast("🤦‍♀️ Liked Removed !", {
        position: "top-center"
      });
    } else {
      //pehle se like nahi hai ye courses
      // inster krna h ye courese liked Courses mai
      if (likedCourse.length === 0) {
        setLikedCourse([course.id]);
      } else {
        setLikedCourse((prev) => [...prev, course.id]);
      }
      // toast.success("Liked");
      toast("❤️ Liked Succesfully", {
        position: "top-center"
      });
    }
  };
  return (
    <div className="w-[250px]  h-[300px] bg-slate-700 bg-opacity-80 shadow-md rounded-md overflow-hidden text-white relative ">
      <div className="">
        <img className="" src={course.image.url} alt="" />
        <div className="absolute bottom-[48%] right-2 w-[30px] h-[30px] bg-white  grid place-items-center rounded-full shadow-lg">
          <button onClick={clickHandler}>
            {likedCourse.includes(course.id) ? (
              <FcLike />
            ) : (
              <FcLikePlaceholder />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-1 text-sm text-white text-justify">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "...."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
