import React from "react";

const Chatuser = () => {
  return (
    <div className="flex gap-4 items-center justify-center bg-slate-600">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1>royal</h1>
        <span>Online</span>
      </div>
    </div>
  );
};

export default Chatuser;
