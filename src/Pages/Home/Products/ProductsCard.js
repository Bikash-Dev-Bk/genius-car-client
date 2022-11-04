import React from 'react';

const ProductsCard = ({product}) => {
    const { title, img, price,ratting } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure >
            <img className="p-5 " src={img} alt="" />
          </figure>
          <div className="card-body text-center">
            <p className="font-bold">Ratting: {ratting} Stars</p>
            <h2 className="font-bold text-3xl">{title}</h2>
            <p className="text-2xl text-orange-600 font-semibold"> Price: ${price}</p>
          </div>
        </div>
      );
};

export default ProductsCard;