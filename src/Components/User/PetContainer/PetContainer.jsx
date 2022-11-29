import React from 'react'
import PetButton from './PetButton/PetButton';

const PetContainer = () => {
    return (
        <div className="flex flex-1 flex-row flex-nowrap overflow-x-auto overflow-y-none w-5/6 gap-3 h-[43vh] mx-auto my-3 sm:m-0 sm:w-[100vw]">
            <PetButton/>
            <PetButton/>
            <PetButton/>
            <PetButton/>
            <PetButton/>
            
        </div>
    )
}

export default PetContainer;