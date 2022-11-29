import React, { useEffect } from "react";
import {HiMail} from "react-icons/hi";
import {HiLockClosed} from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useRequest } from '../../../../hooks/useRequest';
import FormControllers from "./FormControllers/FormControllers";


const Form = () => {
    const navigate = useNavigate();

    const { data, isLoading, fetchApi } = useRequest('/user/login', 'POST');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = Object.fromEntries(new FormData(e.target));

        await fetchApi(body);
    }

    useEffect(() => {
        if (data && data.status === 200) {
            const { token } = data.response;
            localStorage.setItem('auth', token);
            navigate('/Blog');
        }
    }, [data]);
    
    return(
        <form onSubmit={handleSubmit} className="flex flex-col bg-white px-10 py-20 rounded-3xl">
            <h1 className="text-5xl">Iniciar sesion</h1>
            <p className="text-lg mt-4">Si ya tienes una cuenta registrada puedes iniciar sesion desde aquí!</p> 

            <div className=" flex flex-col mt-8 gap-y-2">
                <div className="">
                    <div className="text-lg text-gray-800">Email</div>
                    <label className="relative block ">
                        <span className="absolute inset-y-0 flex items-center">
                            <HiMail className="h-4 w-4 fill-background "/>
                        </span>
                        <input name="email" className="w-full text-sm p-2 pl-5 pr-3 bg-transparent border-b border-gray-500 focus:outline-none" type="text" placeholder="Ingresa tu direccion de correo electronico" />
                    </label>
                        
                </div>

                <div className="">
                    <label className="text-lg text-gray-800">Contraseña</label>
                    <label className="relative block ">
                        <span className="absolute inset-y-0 flex items-center">
                            <HiLockClosed className="h-4 w-4 fill-background "/>
                        </span>
                        <input name="password" className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none" type="password" placeholder="Ingresa tu contraseña" />
                    </label>
                    
                </div>

                <FormControllers />

                
            </div>
        </form>

        
    )
}

export default Form