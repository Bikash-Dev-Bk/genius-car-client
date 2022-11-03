import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure >
        <img className="p-5 " src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="flex items-center">
          <p className="text-2xl text-orange-600 font-semibold">
            Price: ${price}
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
