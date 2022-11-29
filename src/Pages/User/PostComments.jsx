import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import CardContainer from "../../Components/User/CardContainer/CardContainer";
import CommentsContainer from "../../Components/User/CommentsContainer/CommentsContainer";

const PostComments = () =>{
    return(
        <div className="bg-background">
            <LoggedNavbar/>
            <CardContainer />
            <CommentsContainer />
            <LoggedFooter/>

        </div>

    )
};

export default PostComments;