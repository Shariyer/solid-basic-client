/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="my-2 ">
      <h4>Programme Categories</h4>
      {categories.map((category) => (
        <NavLink
          className="d-block m-4 fs-3"
          to={`singleCourse/${category.id}`}
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
