import React from "react";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import Footer from "../../Components/NoAuth/Footer/Footer";
import CompletedRegisters from "../../Components/NoAuth/CompletedRegisters/CompletedRegisters";

const SuccessfulRegistered = () => {
    return(
        <div>
            <Navbar />
            <div className="flex justify-center bg-dog1 bg-cover bg-bottom h-screen ">
                <CompletedRegisters />
            </div>
            <Footer />
        </div>
    );
}

export default SuccessfulRegistered;
