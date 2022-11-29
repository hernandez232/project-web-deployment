import React from "react";
import {NavLink} from "react-router-dom";

const RegisterFormControllers = () => {
    return (
        <div>

            <div className="flex justify-center text-white mt-10">
                <NavLink to="/CompletedRegister" className="bg-backblue hover:bg-gray-500 py-4 px-4 rounded-2xl w-full text-center "> Registrarse</NavLink>
            </div>
            
        </div>
    )
}

export default RegisterFormControllers