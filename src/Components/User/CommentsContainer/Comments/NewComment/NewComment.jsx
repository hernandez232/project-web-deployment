import React from "react";


const NewComment = () => {
  return (
    <div className="">
      <form className="inline-block	 w-full p-3 ">
          <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-40">
         
          </textarea>
          <button type="submit" className=" bg-newblue hover:bg-blue-800 py-4 px-4 rounded w-1/5 text-white my-2 float-right  sm:w-full	">
              Comentar

          </button>
      </form>
      
    </div>
  );
};

export default NewComment;
