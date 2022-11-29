import React from "react";
import {
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  import Home from '../Pages/NoAuth/Home'; 
  import Login from '../Pages/NoAuth/Login';
  import Register from "../Pages/NoAuth/Register";
  import NotFound from '../Pages/NoAuth/NotFound';
  import Events from "../Pages/NoAuth/Events";
  import SocialService from "../Pages/NoAuth/SocialService";
  import About from "../Pages/NoAuth/About";
  import SuccessfulRegistered from "../Pages/NoAuth/SuccessfulRegistered";
  import Blog from "../Pages/User/Blog";
  import ForgetPassword from "../Pages/NoAuth/ForgetPassword";
  import SendPassword from "../Pages/NoAuth/SendPassword";

  const AuthRouter = () => {
      return(
        
        <Routes>
             
            <Route path="/" element={<Home />}>  </Route>
            <Route path="/Login" element={<Login />}>  </Route>
            <Route path="/Register" element={<Register/>}>  </Route>
            <Route path="/Events" element={<Events />}>  </Route>
            <Route path="/SocialService" element={<SocialService />}>  </Route>
            <Route path="/About" element={<About />}>  </Route>
            <Route path="/Blog" element={<Blog />}>  </Route>
            <Route path="/BlogAuth" element={<Blog />}>  </Route>
            <Route path="/ForgetPass" element={<ForgetPassword />}>  </Route>
            <Route path="/CompletedRegister" element={<SuccessfulRegistered />}>  </Route>
            <Route path="/ResetPassword" element={<SendPassword/>}>  </Route>
            <Route path="*" element={<NotFound />}>  </Route>
       
      </Routes> 
      
      
      );
  }

 export default AuthRouter;