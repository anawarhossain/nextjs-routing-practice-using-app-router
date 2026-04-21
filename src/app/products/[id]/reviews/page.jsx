import React from 'react';

const ProductReviews = async ({ params }) => {
    const { id } = await params;
    console.log(id , "id")
    return (
        <div>
            <h1>Review for Product {id}</h1>
        </div>
    );
};

export default ProductReviews;