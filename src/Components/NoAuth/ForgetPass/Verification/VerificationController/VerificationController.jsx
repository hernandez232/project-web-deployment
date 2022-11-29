import React from "react";
import { NavLink } from "react-router-dom";


const VerificationController = () => {
    return(
        <div>
            <div className="flex justify-center text-white mt-20">
                <NavLink to="/ResetPassword" className="bg-backblue hover:bg-gray-500 py-4 px-4 rounded-2xl w-1/2 text-center"> Enviar clave </NavLink>
            </div>
        </div>
    );
}

export default VerificationController;