import React from "react";
import {
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
 
import Blog from "../Pages/User/Blog";
import LoggedAbout from "../Pages/User/LoggedAbout";
import LoggedNotFound from "../Pages/User/LoggedNotFound";
import LoggedEvents from "../Pages/User/LoggedEvents";
import LoggedSocialService from "../Pages/User/LoggedSocialService";
import Profile from "../Pages/User/Profile";
import MyPost from "../Pages/User/MyPost";
import MyPets from "../Pages/User/MyPets";
import Dates from "../Pages/User/Dates";
import DateHistory from "../Pages/User/DateHistory";
import FavoritePost from "../Pages/User/FavoritePost";
import NewDate from "../Pages/User/NewDate";
import NewPost from "../Pages/User/NewPost";
import NewPet from "../Pages/User/NewPet";
import PetProfile from "../Pages/User/PetProfile";
import PostComments from "../Pages/User/PostComments";
import PopularPost from "../Pages/User/PopularPost";



 

  const UserRouter = () => {

    return(
        <Routes>
        <Route path="/" element={<Blog />}>  </Route>
        <Route path="/Blog" element={<Blog />}>  </Route>
        <Route path="/Profile" element={<Profile />}>  </Route>
        <Route path="/MyPost" element={<MyPost />}>  </Route>
        <Route path="/MyPets" element={<MyPets />}>  </Route>
        <Route path="/NewPet" element={<NewPet />}>  </Route>
        <Route path="/Dates" element={<Dates />}>  </Route>
        <Route path="/DateHistory" element={<DateHistory />}>  </Route>
        <Route path="/FavoritePost" element={<FavoritePost />}>  </Route>
        <Route path="/NewDate" element={<NewDate/>}>  </Route>
        <Route path="/NewPost" element={<NewPost />}>  </Route>
        <Route path="/PetProfile" element={<PetProfile />}>  </Route>
        <Route path="/PostComments" element={<PostComments />}>  </Route>
        <Route path="/SocialService" element={<LoggedSocialService />}>  </Route>
        <Route path="/About" element={<LoggedAbout />}>  </Route>
        <Route path="/Events" element={<LoggedEvents />}>  </Route>
        <Route path="/PopularPost" element={<PopularPost />}>  </Route>

        <Route path="*" element={<LoggedNotFound />}>  </Route>

      </Routes>

    );
  }

  export default UserRouter;