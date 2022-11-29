import React from 'react'
const imgURl = "https://www.blogdelfotografo.com/wp-content/uploads/2019/01/oldskool-photography-303977-unsplash.jpg";


const ProfilePicture =()=>{
    return(
       
             <img src={imgURl} className="w-2/4 h-[40vh] sm:w-full sm:m-0  rounded m-auto" />
       
    )
}

export default ProfilePicture;