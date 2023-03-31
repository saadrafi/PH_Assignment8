import React from "react";

const SideCart = () => {
  return (
    <div className="sticky top-0">
      <div className="bg-[#6047EC]/[0.1] border border-solid border-[#6047EC] rounded">
        <h3 className="text-center text-[#6047EC] p-6">Spent Time on Read:100</h3>
      </div>
      <div className="bg-[#111111]/[0.05] mt-5">
        <div className="p-4">
          <h3 className="text-[#111111] font-bold">Bookmarked Blogs:6</h3>
          
            <div className="bg-[#ffffff] shadow-lg rounded font-semibold text-lg p-4 my-3 mb-4">
              <p>How to Become a programmer</p>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default SideCart;
