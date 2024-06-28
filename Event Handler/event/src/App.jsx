import './App.css';
import { useState } from 'react';
import './components/post.css'

function App() {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <button onClick={fetchData}>GET POSTS</button>
      <hr />
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
