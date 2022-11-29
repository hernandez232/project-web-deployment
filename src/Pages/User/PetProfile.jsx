import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import PetProfileContainer from "../../Components/User/PetProfile/PetProfileContainer";

const PetProfile = () =>{
    return(
        <div  className="bg-background">
            <LoggedNavbar/>
            <PetProfileContainer/>
            <LoggedFooter/>
        </div>

    )
};

export default PetProfile;