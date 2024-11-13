import React from "react";
import Messagecard from "./Messagecard";

const Messages = () => {
  return (
    <div className="border h-[20vh] border-red-300 overflow-y-auto" style={{minHeight:"calc(79vh)"}}>
        <Messagecard />
       
    </div>
  );
};

export default Messages;
