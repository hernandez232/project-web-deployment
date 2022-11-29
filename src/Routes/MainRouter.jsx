import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import UserRouter from "./UserRouter";
import AdminRouter from "./AdminRouter";
import AuthRouter from "./AuthRouter";

const MainRouter = () => {
    const token = localStorage.getItem('auth');
    const role ="";

    console.log(token);

  return (
    <BrowserRouter>
      {role === "user" && <UserRouter />}
      {role === "null" && <AdminRouter />}
      {(token == '' || !role) && <AuthRouter />}
    </BrowserRouter>
  );
};

export default MainRouter;

