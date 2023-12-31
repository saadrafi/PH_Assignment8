import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleBlog from "../SingleBlog/SingleBlog";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, setTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmark = (blog) => {
    if(bookmarks.includes(blog))
    {
      toast.error("Already Bookmarked");
    }
    else{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    }
  };


   const timeToRead = (newtime) => {
     const newTime = newtime + time;
     setTime(newTime);
   };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-3 mt-5 ">

      <div>
        <ToastContainer />
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} addTime={timeToRead} handleBookmark={handleBookmark}></SingleBlog>
        ))}
      </div>
      <div className="relative">
        <SideCart time={time} bookmarks={bookmarks}></SideCart>
      </div>
    </div>
  );
};

export default Blogs;
