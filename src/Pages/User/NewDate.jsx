import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import NewDateContainer from  "../../Components/User/NewDate/NewDateContainer";

const NewDate = () =>{
    return(
        <div  className="bg-background">
            <LoggedNavbar/>
            <NewDateContainer/>
            <LoggedFooter/>
        </div>

    )
};

export default NewDate;