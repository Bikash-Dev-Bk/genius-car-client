import React from 'react';

const FeaturesItem = ({feature}) => {
    const { title, img } = feature;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure >
            <img className="p-5 " src={img} alt="" />
          </figure>
          <div className="card-body text-center">
            <h2 className="font-bold text-3xl">{title}</h2>
          </div>
        </div>
      );
};

export default FeaturesItem;