import React from "react";
import {HiCheckCircle} from "react-icons/hi";
import PasswordSentControllers from "./PasswordSentControllers/PasswordSentControllers";

const PasswordSent = () => {
    return(
        <div className="flex flex-col justify-center bg-white px-10 py-10 rounded-3xl  h-4/6">
            <div className="flex flex-col justify-center">
                <div className=" flex flex-col items-center justify-center  ">
                    <HiCheckCircle className="text-backblue h-40 w-40" />
                    <h1 className="text-3xl font-Lato text-center">Correo enviado</h1>
                </div>
                
                <p className="text-lg text-center mt-4">Te hemos enviado un correo electronico para que puedas cambiar tu contraseña</p>


                <PasswordSentControllers />

            </div>

        </div>
    );
}

export default PasswordSent;