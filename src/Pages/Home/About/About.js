import React from "react";
import parson from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={parson} alt="" className=" w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={parts} alt="" className=" w-3/5 right-10 top-1/2 absolute border-8 rounded-lg shadow-2xl" />
        </div>
        <div className="w-1/2">
            <h2 className="text-xl font-bold text-orange-600 my-5">About Us</h2>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> 
            & of experience <br /> 
            in this field.
          </h1>
          <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn btn-primary ">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
