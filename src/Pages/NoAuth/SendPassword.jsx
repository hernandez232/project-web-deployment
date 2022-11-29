import React from "react";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import Footer from "../../Components/NoAuth/Footer/Footer";
import ResetPassword from "../../Components/NoAuth/ForgetPass/Verification/ResetPassword/ResetPassword";

const SendPassword = () => {
    return(
        
        <div>
            <Navbar />
            <div className="flex justify-center bg-dog bg-cover h-screen">
                <ResetPassword />
            </div>
            <Footer />
        </div>
    );
}

export default SendPassword;