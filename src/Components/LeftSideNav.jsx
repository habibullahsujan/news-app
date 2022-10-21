import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import TypeWriters from "./TypeWriter";


const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="ml-10">
      <TypeWriters/>
      
      <h4 className="my-5">News Category:{categories.length}</h4>
      {categories.map((category) => (
        <div className="border border-slate-500 mb-2 p-1">
          {" "}
          <Link key={category.category_id} to={`/category/${category.id}`}>{category.name}</Link>{" "}
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
