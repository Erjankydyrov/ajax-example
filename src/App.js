import { useState } from 'react';
import './App.css';
import Comments from './components/Comments/Comments';
import FullComment from './components/FullComment/FullComment';
import FullPost from './components/FullPost/FullPost';
import Posts from './components/Posts/Posts';

function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  let fullPost = "Select a post!";
  if (selectedPost == 0) {
    fullPost = <FullPost id = {selectedPost} />
  }

  return (
    <div className="App">
      <Posts setSelectedPost={setSelectedPost} />
      <Comments setSelectedPost={setSelectedPost} />
      {selectedPost}
      <FullPost id = {selectedPost}/>
      <FullComment id = {selectedPost} />
    </div>
  );
}

export default App;
