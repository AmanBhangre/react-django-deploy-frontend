import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/").then(response => {
      setBlogs(response.data)
    })
  }, [])
  return (
    <div className="App">
      {
        blogs.map(blog => (
          <div className="blog" key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <small><b>{blog.author}</b></small>
          </div>
        ))
      }
    </div>
  );
}

export default App;
