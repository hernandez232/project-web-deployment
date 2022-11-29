import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class Anchor extends Component {
    render() {
        return(
           <div>
                <div className=" text-white sm:hidden">
               <ul className=" flex flex-1 flex-row flex-wrap-nowrap gap-6 items-center">
               <li><NavLink to="/SocialService" className={({isActive}) => (isActive ? 'text-blue-500' : '')}> Servicio Social</NavLink> </li>
                   <li> <NavLink to="/About" className={({isActive}) => (isActive ? 'text-blue-500' : '')}> Nosotros</NavLink> </li>
                   <li>  <NavLink   to="/Blog" className={({isActive}) => (isActive ? 'text-blue-500' : '')}> Blog</NavLink> </li>
                   <li> <NavLink  to="/Events"  className={({isActive}) => (isActive ? 'text-blue-500' : '')}> Eventos</NavLink> </li>
                   <li > <NavLink  to="/Login" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} ><button  className="bg-newpink hover:bg-pink-800 py-4 px-4 rounded">iniciar sesion </button></NavLink> </li>
                   <li > <NavLink  to="/Register" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} > <button className="bg-newblue hover:bg-blue-800 py-4 px-4 rounded"> Registrarse</button></NavLink> </li>
               </ul>
    
            </div>
            <div>
                
            </div>
           </div>
        )
    }
}
export default Anchor;