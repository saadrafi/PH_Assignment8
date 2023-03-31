import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="grid grid-cols-[2fr,1fr] gap-3 mt-5 ">
      <div>
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} ></SingleBlog>
        ))}
      </div>
      <div className="relative">
        <SideCart></SideCart>
      </div>
    </div>
  );
};

export default Blog;
