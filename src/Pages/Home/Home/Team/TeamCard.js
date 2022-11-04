import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const TeamCard = ({team}) => {
    const { skill, img, name } = team;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure >
            <img className="p-5 " src={img} alt="" />
          </figure>
          <div className="card-body text-center">
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="text-xl font-semibold"> {skill}</p>
            <div className='flex justify-center'>
                <a href="https://www.facebook.com"><FaFacebook className='mr-4'></FaFacebook></a>
                <a href="https://www.instagram.com"><FaInstagram className='mr-4'></FaInstagram></a>
                <a href="https://www.twitter.com"><FaTwitter className='mr-4'></FaTwitter></a>
                <a href="https://www.linkedin.com"><FaLinkedin className='mr-4'></FaLinkedin></a>
            </div>
          </div>
        </div>
      );
};

export default TeamCard;