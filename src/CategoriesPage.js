import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/users/categories")
      .then(res => res.json())
      .then(data => setCategories(data.categories))
      .catch(err => console.log("Error fetching categories:", err));
  }, []);

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", borderRight: "1px solid #ccc", padding: "10px" }}>
        <h3>Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href={`#category-${category.id}`}>{category.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginLeft: "20px", flex: 1 }}>
        <h2>Questions</h2>
        {categories.map((category) => (
          <div key={category.id} id={`category-${category.id}`} style={{ marginBottom: "20px" }}>
            <h3>{category.name}</h3>
            <p>1. {category.question1}</p>
            <p>2. {category.question2}</p>
          </div>
        ))}

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default CategoriesPage;
