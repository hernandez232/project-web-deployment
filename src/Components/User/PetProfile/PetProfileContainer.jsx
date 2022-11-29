import React from 'react'
import Table from './PetProfileComponents/PetData/Table'
import ProfilePicture from './PetProfileComponents/PetData/ProfilePicture'
import Anchors from './PetProfileComponents/PetProfileOptions/Anchors';
import DatesContainer from '../Dates/DatesContainer';

const PetProfileContainer=()=>{
    return(
        <div className="bg-white shadow-md my-5 px-5 mx-auto py-5 rounded-3xl w-3/4 sm:w-full xl:h-100 font-Dm sm:px-1">
            <div className="flex flex-row p-4 gap-3 sm:inline-block sm:p-0">
                <ProfilePicture/>
                <Table/>
            </div>
            <Anchors/>
            <h1 className="font-Dm text-3xl my-3 font-bold">Citas Programadas:</h1>
            <DatesContainer/>
          
           

        </div>
    )
}

export default PetProfileContainer