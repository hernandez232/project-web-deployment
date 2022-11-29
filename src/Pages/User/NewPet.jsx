import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import NewPetContainer from "../../Components/User/NewPetContainer/NewPetContainer";

const NewPet = () =>{
    return(
        <div  className="bg-background">
            <LoggedNavbar/>
            <NewPetContainer/>
            <LoggedFooter/>
        </div>

    )
};

export default NewPet;