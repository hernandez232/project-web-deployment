import React from 'react'

const Form = () => {

    return(
        <form className="flex flex-col gap-4 font-Dm">
            <label className="mt-3">Tipo de cita: </label>
            <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-16">
         
          </textarea>
        
        <label> Fecha: </label>
        <input type="date" className="border w-1/4 h-12 sm:w-full"/>
          <label> Hora: </label>
          <input type="time" className="border w-1/4 h-12 sm:w-full"/>
          <label> Lugar: </label>
          <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-16">
         
         </textarea>
          <label> Descripcion: </label>

          <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-16">
         
          </textarea>


          <button type="submit" className=" bg-newblue hover:bg-blue-800 py-4 px-4 rounded w-1/5 text-white my-2 m-auto sm:w-full 	">
              Agendar

          </button>

        </form>

    )
}

export default Form;