import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect( ()=> {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-2xl text-orange-600'>Popular Products</p>
                <h1 className='font-bold text-5xl py-5'>Browse Our Products</h1>
                <p className=''>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
                {
                    products.map(product => 
                    <ProductsCard
                     key={product._id} product={product}>
                    </ProductsCard>)
                }
            </div>
            <div className='my-10 text-center'>
            <button className="btn btn-outline btn-warning">More Products</button>
            </div>
        </div>
    );
};

export default Products;