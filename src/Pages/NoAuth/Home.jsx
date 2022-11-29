import React from "react";
import Lobby from "../../Components/NoAuth/Container/Lobby/Lobby";
import Footer from "../../Components/NoAuth/Footer/Footer";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";



const Home = () => {
    return(
        <div className=" bg-dog bg-cover h-screen items-center">
            <Navbar/>
           <Lobby />
           <Footer />
        </div>
    );
};

export default Home