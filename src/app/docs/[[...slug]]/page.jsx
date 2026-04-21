import React from "react";

const DocsPage = async ({ params }) => {
  const { slug } = await params;
    console.log(slug);

    if (!slug || slug.length === 0) {
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold">Documentation Home</h1>
          </div>
        );
    }
    

  return (
    <div className="p-8">
          <h1 className="text-3xl font-bold">Docs: {slug.join(">")}</h1>
    </div>
  );
};

export default DocsPage;
