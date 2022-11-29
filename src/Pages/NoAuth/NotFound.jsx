import React from "react";
import Footer from "../../Components/NoAuth/Footer/Footer";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import { FiFrown } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="bg-background">
            <Navbar/>
            <div className=" w-2/4 flex flex-1 flex-col text-center text-white sm:w-full mx-auto my-5" >
              <FiFrown  className="m-auto h-[40vh] w-[40vw] stroke-white "/>
                <h1 className="font-Dm text-4xl font-bold sm:text-3xl">Lo sentimos; esta pagina no está disponible</h1>
                <h3 className="font-Dm text-2xl sm:text-lg">Es posible que el enlace esté roto o que se haya eliminado la página. Verifica que el enlace que quieres abrir es correcto. </h3>
                <NavLink  to="/" className="sm:w-full sm:p-1" > <button className=" m-3 bg-backblue hover:bg-blue-800 text-white font-Dm py-4 px-4 rounded w-1/6 sm:m-0  sm:w-full h-full"> volver al inicio</button></NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound