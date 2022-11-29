import React from "react"
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import MyPetsOptions from "../../Components/User/MyPetsOptions/MyPetsOptions";
import PetContainer from "../../Components/User/PetContainer/PetContainer";

const MyPets = () =>{
    return(
        <div  className="bg-background">
         
           <LoggedNavbar/>
           <PetContainer/>
           <MyPetsOptions/>
           <LoggedFooter/>
        </div>

    )
};

export default MyPets;