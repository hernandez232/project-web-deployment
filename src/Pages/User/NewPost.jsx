import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import NewPostContainer from "../../Components/User/NewPost/NewPostContainer";

const NewPost = () =>{
    return(
        <div  className="bg-background ">
            <LoggedNavbar/>
            <NewPostContainer/>
            <LoggedFooter/>
        </div>

    )
};

export default NewPost;