import { useState, useEffect } from "react";
import axios from "axios";
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
    let lastIndexofPosts = currentpage * postperpage; //hint to me not you: because slice not take the last number
    let firstIndexofPosts = lastIndexofPosts - postperpage;
    return posts.slice(firstIndexofPosts, lastIndexofPosts);
  };

  const onChange = (e) => {
    if (e.target.value < 1) {
      e.target.value = 1;
    } else {
      setPostPerPage(e.target.value);
    }
  };

  return (
    <div className="App">
      <div className="container mt-4">
        <h3 className="text-primary mb-3">My Pagination</h3>
        <input
          type="number"
          className="form-control w-50"
          placeholder="Enter Number of Posts"
          onChange={onChange}
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
