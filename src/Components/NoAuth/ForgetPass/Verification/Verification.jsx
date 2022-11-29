import React from "react";
import VerificationController from "./VerificationController/VerificationController";
import {HiMail} from "react-icons/hi";

const Verification = () => {
    return(
        <div className="flex flex-col justify-center bg-white px-10 py-10 rounded-3xl h-4/6">
            <div className="flex flex-col">
                <h1 className="text-3xl font-Lato text-center">Verificacion de cuenta</h1>
                <p className="text-lg text-center mt-4">Ingresa el correo electronico con el que tengas asociada la cuenta</p>
            </div>

            <div className="flex flex-col mt-8">
                <div className="text-lg text-gray-800">Email</div>
                    <label className="relative block ">
                        <span className="absolute inset-y-0 flex items-center">
                            <HiMail className="h-4 w-4 fill-background "/>
                        </span>
                        <input className="w-full text-sm p-2 pl-5 pr-3 bg-transparent border-b border-gray-500 focus:outline-none" type="text" placeholder="Ingresa tu direccion de correo electronico" />
                    </label>
            </div>

            <VerificationController />


        </div>
    );
}

export default Verification;