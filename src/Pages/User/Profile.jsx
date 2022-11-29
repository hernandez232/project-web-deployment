import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";

const Profile = () =>{
    return(
        <div  className="bg-background">
            <LoggedNavbar/>
            <LoggedFooter/>
        </div>

    )
};

export default Profile;