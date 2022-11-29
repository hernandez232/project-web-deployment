import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";

class Anchor extends Component {
    render() {
        return(
            <div className=" text-white sm:hidden font-Dm">
               <ul className=" flex flex-1 flex-row flex-wrap-nowrap gap-6 items-center">
               <li><NavLink to="/SocialService" className={({isActive}) => (isActive ? 'text-blue-500' : '')}> Servicio Social</NavLink> </li>
               <li> <NavLink  to="/Events"  className={({isActive}) => (isActive ? 'text-blue-500' : '')}> Eventos</NavLink> </li>
                   <li> <NavLink to="/About" className={({isActive}) => (isActive ? 'text-blue-500' : '')}> Nosotros</NavLink> </li>
                   <li>  <NavLink   to="/Blog" className={({isActive}) => (isActive ? 'text-blue-500' : '')}> Blog</NavLink> </li>
                  
                   
                   <li> <NavLink  to="/MyPets"  className={({isActive}) => (isActive ? 'text-blue-500' : '')}> Mis Mascotas</NavLink> </li>
                   <li> <NavLink  to="/MyPost"  className={({isActive}) => (isActive ? 'text-blue-500' : '')}>Mis Publicaciones</NavLink> </li>
                   <li> <NavLink  to="/Profile"  className={({isActive}) => (isActive ? 'text-blue-500 flex items-center' : 'flex items-center')}> <FiUser /> Perfil</NavLink> </li>
                
               </ul>
    
            </div>
        )
    }
}
export default Anchor