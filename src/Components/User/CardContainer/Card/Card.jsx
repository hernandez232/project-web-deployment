import React from "react";
import Controllers from "./CardComponents/Controllers";
import Data from "./CardComponents/Data";

const Card = ({ post }) => {
  return (
    <div className="bg-white shadow-md my-5 px-5  rounded-3xl w-2/4  sm:w-full xl:h-100">
      <Data pet={post && post.pet.name} text={post && post.body} />
      <Controllers />
    </div>
  );
};

export default Card;
