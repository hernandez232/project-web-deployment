import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class Anchors extends Component {
    render() {
        return(
           <div className=" sm:h-auto my-3 p-3 " >
                <div className=" text-white font-Dm font-regular text-sm h-full ">
               <ul className=" flex flex-1 flex-row flex-wrap-nowrap gap-6 items-center justify-end  sm:inline-block sm:w-full xl:h-full h-full  ">
                   <li className="w-2/12 sm:w-full xl:my-1  h-full"> <NavLink  to="/" className={({isActive}) => (isActive ? 'hidden bg-inherit ' : '')} ><button  className="bg-newpink hover:bg-pink-800 py-4 px-4 rounded  w-full  h-full  xl:text-sm ">Editar</button></NavLink> </li>
                   <li className="w-2/12 sm:w-full xl:my-1  h-full"> <NavLink  to="/" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} > <button className="bg-newblue hover:bg-blue-800 py-4 px-4 rounded  w-full  h-full  xl:text-sm"> Eliminar</button></NavLink> </li>
               </ul>
    
            </div>
            <div>
                
            </div>
           </div>
        )
    }
}
export default Anchors;