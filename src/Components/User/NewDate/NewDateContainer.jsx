import React from 'react'
import Form from './NewDateComponents/Form'

const NewDateContainer = () => {
    return(
        <div className=" m-auto bg-white shadow-md my-5 px-5 py-3 rounded-3xl w-2/4  sm:w-full  "> 
            <h1 className="font-Dm text-3xl font-bold">Crear nueva cita:</h1>
            <Form/>
        </div>
    )
}

export default NewDateContainer;