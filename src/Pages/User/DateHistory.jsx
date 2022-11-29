import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import HistoryContainer from "../../Components/User/Dates/HistoryContainer"

const DateHistory = () =>{
    return(
        <div  className="bg-background">
            <LoggedNavbar/>
            <div className="bg-white shadow-md my-5 px-5 mx-auto py-5 rounded-3xl w-3/4 sm:w-full xl:h-100 font-Dm sm:px-1">
            <h1 className="font-Dm text-3xl my-3 font-bold">Historial de citas:</h1>
            <HistoryContainer/>
            </div>
            <LoggedFooter />
        </div>

    )
};

export default DateHistory;