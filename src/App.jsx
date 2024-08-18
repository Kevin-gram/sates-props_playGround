import Blog from "./Components/Blog";
import { useState, useEffect } from "react";
import Lists from "./Components/Lists";
const cities = [
  "New York",
  "London",
  "Tokyo",
  "San diego",
  "los Angels",
  "Las vegs",
  "Paris",
  "Toronto",
  "San Fancisco",
];
function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(blogs);
  return (
    <div className="">
      <p className=""> Hello mr keivn waguan !</p>
      <Blog blogs={blogs} />
      <Lists cities={cities} />
    </div>
  );
}

export default App;
