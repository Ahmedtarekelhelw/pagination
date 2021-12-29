import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";

function App() {
  const [isloading, setIsLoading] = useState(true);
  const [postperpage, setPostPerPage] = useState(10);
  const [currentpage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  let currentPosts = () => {
    let lastIndexofPosts = currentpage * postperpage;
    let firstIndexofPosts = lastIndexofPosts - postperpage;
    return posts.slice(firstIndexofPosts, lastIndexofPosts);
  };

  return (
    <div className="App">
      <div className="container mt-4">
        <h3 className="text-primary mb-3">My Pagination</h3>
        <input
          type="number"
          id="floatingInput"
          className="form-control w-50"
          placeholder="Enter Number of Posts"
          onChange={(e) => setPostPerPage(e.target.value)}
        />
        {isloading ? (
          <h2>Loading.....</h2>
        ) : (
          <Posts currentPosts={currentPosts} />
        )}
        <Pagination
          postperpage={postperpage}
          totalposts={posts.length}
          currentpage={currentpage}
          setCurrentPage={(number) => setCurrentPage(number)}
        />
      </div>
    </div>
  );
}

export default App;
