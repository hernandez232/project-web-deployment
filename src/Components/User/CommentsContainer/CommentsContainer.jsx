import React from "react";
import CommentsCard from "./Comments/CommentsCard";
import NewComment from "./Comments/NewComment/NewComment";

const CommentsContainer = () => {
  return (
    <div className=" bg-white w-2/4 m-auto rounded-3xl my-3  p-2 sm:w-full">
       <div className="p-3 ">
       <h1 className="font-Dm font-semibold text-2xl">Comentarios: </h1>
       </div>
      <CommentsCard />
      
      
      <div className="p-3 ">
       <h1 className="font-Dm font-semibold text-2xl">Agregar un comentario </h1>
       </div>
       <NewComment />
    </div>
  )
}

export default CommentsContainer;
