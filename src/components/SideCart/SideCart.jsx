import React from "react";
import BookmarkDiv from "./BookmarkDiv";

const SideCart = ({ time, bookmarks }) => {
  return (
    <div className="sticky top-0 ">
      <div className="bg-[#6047EC]/[0.1] border border-solid border-[#6047EC] rounded">
        <h3 className="text-center font-['Exo 2'] text-[#6047EC] p-6">Spent Time on Read:{time} min</h3>
      </div>
      <div className="bg-[#111111]/[0.05] mt-5 rounded">
        <div className="p-4">
          <h3 className="text-[#111111] font-bold">Bookmarked Blogs:{bookmarks.length}</h3>
          {bookmarks.map((bookmark) => (
           <BookmarkDiv bookmark={bookmark} key={bookmark.id}></BookmarkDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCart;
