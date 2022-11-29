import React, { useReducer } from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import BlogOptions from "../../Components/User/BlogOptions/BlogOptions";
import CardContainer from "../../Components/User/CardContainer/CardContainer";
import { useRequest } from '../../hooks/useRequest';

const Blog = () => {
    const { data, isLoading } = useRequest('/post', 'GET', null, true, true);

    console.log(data);

    return(
        <div className="bg-background">
            <LoggedNavbar/>
            <BlogOptions />
                {
                    data && data.response ? (
                        data.response.map((post) => <CardContainer post={post} />)
                    ) : null
                }
            <LoggedFooter/>
        </div>

    )
};

export default Blog;