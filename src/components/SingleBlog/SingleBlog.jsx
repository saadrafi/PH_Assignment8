import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = () => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl rounded-lg mb-6">
        <figure className="px-5">
          <img
            className="h-72 w-full h-contain rounded"
            src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="BlogImage"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <img
                className="w-14 h-14 rounded-full"
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-base font-semibold text-[#111111]/[0.6]">21 March 2022</p>
              </div>
            </div>
            <div>
              <span className=" text-[#111111]/[0.6]">5 min to read </span>
              <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
            </div>
          </div>
          <h2 className="font-bold text-[2.5rem] my-5">How to Become a programmer</h2>
          <div className="card-actions justify-start">
            <span className="text-[#6047EC] underline cursor-pointer">Mark as read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
