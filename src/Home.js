

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ uname }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  console.log(`HOME: uname=${uname}`);

  useEffect(() => {
    if (!uname) {
      console.log(`HOME: navigate('/login')`);
      navigate('/login'); // Redirect if no user is logged in
    }
  }, [uname, navigate]);

  // Category data
  const categories = [
    {
      id: "category1",
      name: "History",
      questions: [
        "Who was President of the U.S. during the Civil War?",
        "Who was the first Black Supreme Court justice?",
      ],
    },
    {
      id: "category2",
      name: "Science",
      questions: [
        "What is the hottest planet in our solar system?",
        "What is the main gas that humans exhale?",
      ],
    },
    {
      id: "category3",
      name: "Sports",
      questions: [
        "How many bases are on a Baseball field?",
        "What do you call when a bowler knocks over all the pins?",
      ],
    },
    {
      id: "category4",
      name: "Entertainment",
      questions: [
        "What movie won Best Picture at the 2018 Oscars?",
        "Who starred in the movie, The Godfather?",
      ],
    },
    {
      id: "category5",
      name: "Literature",
      questions: [
        "Who wrote Wuthering Heights?",
        "Who wrote The Great Gatsby?",
      ],
    },
  ];

  // Handle category click to navigate to the corresponding questions page
  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div>
      <h1>Choose a Category</h1>

      {/* Render category list */}
      <div className="category-menu">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category"
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
