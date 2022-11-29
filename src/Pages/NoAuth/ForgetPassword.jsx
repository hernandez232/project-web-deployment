import React from "react";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import Footer from "../../Components/NoAuth/Footer/Footer";
import ForgetPass from "../../Components/NoAuth/ForgetPass/ForgetPass";

const ForgetPassword = () => {
    return(
        
        <div>
            <Navbar />
            <div className="flex justify-center bg-dog bg-cover h-screen">
                <ForgetPass />
            </div>
            <Footer />
        </div>


    );
}

export default ForgetPassword;