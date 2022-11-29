import React from 'react'

const Table=()=>{
    return(
        <table className=" border-black w-2/4 sm:w-full sm:my-3  text-center border">
           <tr className="border text-center">
               <th colSpan="2" className="border">Datos de la mascota</th>
           </tr>
           <tr className=" border border-black">
               <td className=" border  w-2/4">Nombre</td>
               <td className=" border  w-2/4">Facio</td>
           </tr>
           <tr className=" border">
               <td className=" border  w-2/4">Especie</td>
               <td className=" border  w-2/4">Perro</td>
           </tr>
           <tr className=" border">
               <td className=" border  w-2/4">Raza</td>
               <td className=" border  w-2/4">Pitbull</td>
           </tr>
           <tr className=" border">
               <td className=" border  w-2/4">Edad</td>
               <td className=" border  w-2/4">5 años</td>
           </tr>
           <tr className=" border">
               <td className=" border  w-2/4">Color de pelo</td>
               <td className=" border  w-2/4">Naranja</td>
           </tr>
           <tr className=" border">
               <td className=" border  w-2/4">Peso en libras</td>
               <td className=" border  w-2/4">200</td>
           </tr>
           <tr className=" border">
               <td className=" border  w-2/4">Sexo</td>
               <td className=" border  w-2/4">Macho</td>
           </tr>
           
          

        </table>
    )
}

export default Table;