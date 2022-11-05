import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  
  const { _id, title, img, price } = service;

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
          <Link to={`/checkout/${_id}`}>
          1 <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
