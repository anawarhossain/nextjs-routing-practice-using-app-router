import React from 'react';

const BlogPost = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    
    return (
        <div>
            <p>Post ID: {id}</p>
        </div>
    );
};

export default BlogPost;