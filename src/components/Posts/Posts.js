import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Posts.module.css";
const Posts = ({ setSelectedPost }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data.slice(0, 5));
        console.log("data", posts)
      });
  }, []);

  const results = posts.map((post) => (
    <article key = {post.id} onClick={() => setSelectedPost(post.id)}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </article>
  ))

  return (
    <div className={classes.Posts}>
        {results.length > 0 ? results : "Loading..."}
    </div>
  );
}
export default Posts;
