import React from "react";
import { NavLink } from "react-router-dom";

const Lobby = () => {
    return(
        <section className="text-white mx-20 gap-3 justify-center h-5/6 flex flex-col w-1/5 lg:w-screen lg:p-5 lg:mx-0">
            <h1 className="text-5xl"> PAWS</h1>
            <p className=" text-justify">
                Manten al dia el registro medico de tus mascotas, gestiona citas y más
            </p>

            <NavLink  to="/Register" > 
                <button className=" bg-newblue hover:bg-blue-800 py-4 px-4 rounded mx-auto ">
                    Registrate ahora!
                </button>
            </NavLink>
            
        </section>
    )
}

export default Lobby