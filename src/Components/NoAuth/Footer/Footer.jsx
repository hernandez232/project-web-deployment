import React from "react";
import Anchors from "../Navbar/Anchors/Anchors";

const Footer = () => {
    return(
        <footer className="bg-backblue flex flex-1 flex-row flew-wrap-nowrap justify-between py-10 px-5  ">
            <div className="text-white w-1/4 sm:w-screen">
                <h1> Help your pet with Paws!</h1>
                <p className="my-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque dicta est aut eum a ab temporibus neque ea voluptate! Doloremque eveniet nemo, corrupti pariatur cupiditate itaque tenetur inventore tempora tempore alias vero dolore officia rerum odio mollitia error repellat fuga. Minima dolor tenetur reiciendis qui modi? Animi, consequuntur quos?</p>
                <p>©2022 Paws</p>
            </div>
            <Anchors/>
        </footer>
    );
};

export default Footer