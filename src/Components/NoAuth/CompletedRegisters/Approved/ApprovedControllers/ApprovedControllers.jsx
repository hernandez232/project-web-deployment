import React from "react";
import {NavLink} from "react-router-dom";

const AprovedControllers = () => {
    return(
        <div className="flex justify-center text-white mt-6">
            <NavLink to="/Login" className="bg-backblue hover:bg-gray-500 py-4 px-4 rounded-2xl w-1/2 mt-8 text-center"> Iniciar Sesión</NavLink>
        </div>
    );
}

export default AprovedControllers;