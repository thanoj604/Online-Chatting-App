import React from "react";
import Usercard from "./Usercard";
import useGetAllUsers from "../../../context/useGetAllUsers";

const Users = () => {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-2 ">Messages</h1>
      <div className="overflow-y-auto" style={{maxHeight:"calc(70vh)"}}>
      
      {allUsers.map((user, index)=>(
        <Usercard key={index} user = {user}/>
      ))}
     
      </div>
     
    </div>
  );
};

export default Users;
