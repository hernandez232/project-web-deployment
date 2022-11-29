import React from "react";
import { NavLink } from "react-router-dom";



const FormControllers = () => {
    return (
        <div>
            <div className="flex flex-row justify-between text-xs mt-8">
                <div className="inline-flex gap-x-1">
                    <input className="w-3 y-3" type="checkbox" />
                    <label>Recordarme siempre</label>
                </div>

                <div className="">
                    <NavLink to="/ForgetPass" className="hover:text-newblue ">¿Olvidaste tu contraseña?</NavLink>
                </div>
            </div>

            <div className="flex justify-center text-white mt-10">
                <button type="submit" className="bg-backblue hover:bg-gray-500 py-4 px-4 rounded-2xl w-full text-center"> Iniciar sesion</button>
            </div>
            
        </div>
    )
}

export default FormControllers