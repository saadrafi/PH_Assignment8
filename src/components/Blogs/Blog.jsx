import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

   const timeToRead = (newtime) => {
     const newTime = newtime + time;
     setTime(newTime);
   };

  return (
    <div className="grid grid-cols-[2fr,1fr] gap-3 mt-5 ">
      <div>
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} addTime={timeToRead}></SingleBlog>
        ))}
      </div>
      <div className="relative">
        <SideCart time={time}></SideCart>
      </div>
    </div>
  );
};

export default Blog;
