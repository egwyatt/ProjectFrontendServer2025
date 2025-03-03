import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ uname }) => {
  const [activeCategory, setActiveCategory] = useState(null);  // 1. Define the activeCategory state
  const navigate = useNavigate();

  console.log(`HOME: uname=${uname}`);

  useEffect(() => {
    if (!uname) {
      console.log(`HOME: navigate('/login')`);
      navigate('/login'); // <-- redirect if no user is logged in
    }
  }, [uname, navigate]);

  // 2. Define the handleCategoryClick function
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div>
      <h1>Choose a Category</h1>

      <div className="category" onClick={() => handleCategoryClick("category1")}>
        Category 1: History
      </div>
      {activeCategory === "category1" && (
        <div className="questions">
          <div className="question">Who was President of the U.S. during the Civil War?</div>
          <div className="question">Who was the first Black Supreme Court justice?</div>
        </div>
      )}

      <div className="category" onClick={() => handleCategoryClick("category2")}>
        Category 2: Science
      </div>
      {activeCategory === "category2" && (
        <div className="questions">
          <div className="question">What is the hottest planet in our solar system?</div>
          <div className="question">What is the main gas that humans exhale?</div>
        </div>
      )}

      <div className="category" onClick={() => handleCategoryClick("category3")}>
        Category 3: Sports
      </div>
      {activeCategory === "category3" && (
        <div className="questions">
          <div className="question">How many bases are on a Baseball field?</div>
          <div className="question">What do you call when a bowler knocks over all the pins?</div>
        </div>
      )}

      <div className="category" onClick={() => handleCategoryClick("category4")}>
        Category 4: Entertainment
      </div>
      {activeCategory === "category4" && (
        <div className="questions">
          <div className="question">What movie won Best Picture at the 2018 Oscars?</div>
          <div className="question">Who starred in the movie, The Godfather?</div>
        </div>
      )}

      <div className="category" onClick={() => handleCategoryClick("category5")}>
        Category 5: Literature
      </div>
      {activeCategory === "category5" && (
        <div className="questions">
          <div className="question">Who wrote Wuthering Heights?</div>
          <div className="question">Who wrote The Great Gatsby?</div>
        </div>
      )}
    </div>
  );
};

export default Home;
