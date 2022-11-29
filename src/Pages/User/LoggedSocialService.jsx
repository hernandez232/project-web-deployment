import React from "react";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";

const LoggedSocialService = () => {

    return(
       <div  className="bg-background"> 
          <LoggedNavbar/>
          <LoggedFooter />
       </div>
    )
};

export default LoggedSocialService;