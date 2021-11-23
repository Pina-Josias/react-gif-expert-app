import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = ({ defaultCategory = [] }) => {
  const [categories, setCategories] = useState(defaultCategory);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((element) => (
          <GifGrid key={element} category={element} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
