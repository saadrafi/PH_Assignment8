import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({ blog, addTime, handleBookmark }) => {
  const { title, author, published, image, time } = blog;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(true);
    handleBookmark(blog);
  };

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl rounded-lg mb-6">
        <figure className="px-5">
          <img className="h-72 w-full h-contain rounded" src={image} alt="BlogImage" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <img className="w-14 h-14 rounded-full" src={author.img} alt="" />
              <div>
                <h2 className="text-2xl font-bold">{author.name}</h2>
                <p className="text-base font-semibold text-[#111111]/[0.6]">{published}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-row gap-1 flex flex-col flex-nowrap">
              <span className=" text-[#111111]/[0.6]">{time} min read </span>
              <span onClick={handleBookmarkClick}>
                {isBookmarked ? (
                  <FontAwesomeIcon
                    icon={faBookmarkSolid}
                    className="text-[#6047EC] cursor-pointer"
                  />
                ) : (
                  <FontAwesomeIcon icon={faBookmark} className="text-[#6047EC] cursor-pointer" />
                )}
              </span>
            </div>
          </div>
          <h2 className="font-bold text-[2.5rem] my-5">{title}</h2>
          <div className="card-actions justify-start">
            <span className="text-[#6047EC] underline cursor-pointer" onClick={() => addTime(time)}>
              Mark as read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
