import React from "react";
import CardContainer from "../../Components/User/CardContainer/CardContainer";
import Footer from "../../Components/NoAuth/Footer/Footer";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";

const Events = () => {
    return (
        <div className="bg-background">
            <Navbar />
              <CardContainer />
              <CardContainer />
              <CardContainer />
              <CardContainer />
              <CardContainer />
              <CardContainer />
              <CardContainer />
            <Footer />
        </div>

    );
}

export default Events;