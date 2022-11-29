import React from 'react'
const Type = "Corte de Pelo"
const Date = "6 de octubre de 2022"
const Hour = " 6:00 PM "
const Place = " San salvador"
const Desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus nibh ac nulla venenatis, sit amet commodo arcu molestie. Phasellus dapibus feugiat ornare. Sed feugiat ante auctor, iaculis sem vitae, blandit dui. Nulla facilisi. Ut ipsum lorem, facilisis a mauris et, euismod pulvinar velit. Praesent et tempor lacus. Sed metus tortor, iaculis et mauris non, scelerisque tristique nibh. In hac habitasse platea dictumst. Sed tristique lectus sapien, quis tempus lacus condimentum non. Praesent nec libero condimentum, fermentum est sed, scelerisque mauris. "

const CardHistory = () => {
    return(
        <div className="bg-white shadow-md my-5 px-5 py-3 border  rounded-3xl w-full p sm:w-full xl:h-100">
            <p className=" text-justify font-Dm">
            <strong>Tipo de cita:</strong> {Type} <br/>
            <strong>Fecha:</strong> {Date} <br/>
            <strong>Hora:</strong>{Hour} <br/>
            <strong>lugar:</strong> {Place} <br/>
            <strong>Descripción:</strong>  {Desc}
            </p>

        </div>
    )
}

export default CardHistory