import React from 'react'

const Form = () => {

    return(
        <form className="flex flex-col gap-4">
            <label className="mt-3">Titulo de la publicación </label>
            <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-16">
         
          </textarea>
        
        <label> Descripción: </label>
        <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-52">
         
          </textarea>
          <label> URL de la imagen: </label>
        <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-16">
         
          </textarea>


          <button type="submit" className=" bg-newblue hover:bg-blue-800 py-4 px-4 rounded w-1/5 text-white my-2 float-right  sm:w-full 	">
              Comentar

          </button>

        </form>

    )
}

export default Form;