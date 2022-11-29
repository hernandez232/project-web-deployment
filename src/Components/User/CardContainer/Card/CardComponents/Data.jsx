import React from "react";
const imgURl = "https://www.blogdelfotografo.com/wp-content/uploads/2019/01/oldskool-photography-303977-unsplash.jpg";
  const cardDescription =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda soluta, voluptatum, iusto impedit alias magni velit nam cupiditate praesentium explicabo architecto harum maiores nesciunt corrupti natus nemo doloremque suscipit, tempore ullam a autem deleniti? Esse fugit expedita, sed assumenda eum maiores accusantium earum a consequuntur iure deserunt doloremque inventore dignissimos.";
  const username = "El pepe";
  const Fecha = "21 de Noviembre de 2022";

const Data = ({ pet, text }) => {

  return (
    <div>
        <h3 className="font-Dm font-medium text-gray-400 pt-4 ">
            {Fecha}
        </h3>
      <div className=" my-3 flex flex-row flex-nowrap items-center gap-2">
        <img src={imgURl} className="w-10 h-10 rounded-full" />
        <h1 className="font-Dm font-semibold text-2xl"> {pet}</h1>
      </div>
      <p className="text-justify my-1 font-Dm font-medium">
        {text}
      </p>
      <a href={imgURl} target="_blank">
        <img src={imgURl} className="max-w-100 max-h-screen rounded m-auto" />
      </a>
      <br />
      <hr />
    </div>
  );
};

export default Data;
