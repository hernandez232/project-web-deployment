import React from 'react'
import { NavLink } from "react-router-dom";

const PetButton= () => {
    return(
        <NavLink  to="/PetProfile" className=" ">
            <div className=" w-[30vw] h-[40vh] m-0 rounded sm:w-[100vw] relative" >
            <img src="https://www.nintenderos.com/wp-content/uploads/2021/05/best-electric-type-pokemon-ampharos-pikachu-zapdos-more-Cropped.jpg" className="h-[inherit] w-[inherit]" />
            <div className=" absolute bottom-0 left-0 backdrop-blur-xl text-6xl w-full text-center font-Dm font-bold text-white	">
                <h1>
                    Petname
                </h1>
            </div>
            </div>

        </NavLink>
    )
}

export default PetButton;