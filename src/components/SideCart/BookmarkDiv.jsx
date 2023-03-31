import React from 'react';

const BookmarkDiv = ({bookmark}) => {
    return (
      <div className="bg-[#ffffff] font-['Exo 2'] shadow-lg rounded font-semibold text-lg p-4 my-3 mb-4">
        <p>{bookmark.title}</p>
      </div>
    );
};

export default BookmarkDiv;