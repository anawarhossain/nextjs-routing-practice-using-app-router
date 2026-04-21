import React from 'react';

const CategoryPage =async  ({ params }) => {
    const { category } = await params;
    console.log(category);

    const categoryPath = category.join(" > ");
    return (
      <div>
        <h1 className="text-3xl font-bold">Category: {categoryPath}</h1>
        <p>Full path: /products/{category.join("/")}</p>
      </div>
    );
};

export default CategoryPage;