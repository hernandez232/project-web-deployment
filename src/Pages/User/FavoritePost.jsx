import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import CardContainer from "../../Components/User/CardContainer/CardContainer";


const FavoritePost = () =>{
    return(
        <div  className="bg-background">
            <LoggedNavbar/>
            <CardContainer/>
            <LoggedFooter/>
        </div>

    )
};

export default FavoritePost;