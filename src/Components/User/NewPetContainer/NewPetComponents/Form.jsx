import React from 'react'


const Form = () => {
    return(
        <div>
          <form className="flex flex-1 flex-col p-3 m-3 gap-1 w-full font-Dm">
            <label className="my-3">Especie</label>

            <select required className="w-1/4 sm:w-full" defaultValue="DEFAULT">
            <option value="DEFAULT" disabled >Select something...</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Hamster">Hamster</option>
            <option value="Pez">Pez</option>
            <option value="Ave">Ave</option>
          </select>

            <label className="my-3">Raza </label>
           
            <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-16">
         
          </textarea>

            <label className="my-3">Nombre </label>
            <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-16">
         
          </textarea>
            <label className="my-3">Color de pelo </label>
            <select required className="w-1/4 sm:w-full" defaultValue="DEFAULT">
            <option value="DEFAULT" disabled >Select something...</option>
            <option value="Perro">Negro</option>
            <option value="Gato">Gris</option>
            <option value="Gato">Blanco</option>
            <option value="Gato">Café</option>
            <option value="Gato">Amarillo</option>
            <option value="Gato">Naranja</option>
            <option value="Gato">Plateado</option>
          </select>


            <label className="my-3">Sexo </label>
            <select required className="w-1/4  sm:w-full" defaultValue="DEFAULT">
            <option value="DEFAULT" disabled>Select something...</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
            <label className="my-3">Peso en libras </label>
            <input type="number" className="w-2/4 border rounded p-2 border"/>
            <label className="my-3">Edad </label>
            <input type="number" className="w-2/4 border rounded p-2 border"/>
            <label className="my-3">URL de foto de la mascota</label>
            <textarea placeholder="Escribe tu comentario aqui..."  className="w-full border rounded p-2  h-16">
         
          </textarea>

          


          <button type="submit" className=" bg-newblue hover:bg-blue-800 py-4 px-4 rounded w-1/5 text-white my-2 m-auto  sm:w-full 	">
              Crear

          </button>

        </form>
        </div>

    )
}

export default Form;  