import React from "react";
import Left from "./pages/home/Leftpart/left";
import Right from "./pages/home/Rightpart/right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />

      <Route
        path="/login"
        element={authUser ? <Navigate to={"/"} /> : <Login />}
      />

      <Route
        path="/signup"
        element={authUser ? <Navigate to={"/"} /> : <Signup />}
      />
    </Routes>
  );
};

export default App;
