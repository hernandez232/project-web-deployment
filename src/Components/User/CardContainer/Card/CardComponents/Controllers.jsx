import React from "react";
import { FiHeart } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Controllers = () => {
  return (
    <div className="flex flex-1 my-3 ">
      <div className=" text-3xl flex flex-1 gap-5 ">
        <FiHeart />

        <NavLink
          to="/PostComments"
          className={({ isActive }) => (isActive ? "hidden bg-inherit" : "")}
        >
          {" "}
          <FiMessageSquare />{" "}
        </NavLink>
      </div>
      <div className="text-3xl">
        <FiAlertTriangle />
      </div>
    </div>
  );
};

export default Controllers;
