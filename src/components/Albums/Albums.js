import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Albums.module.css";
const Albums = () => {

  const [albums, setAlbums] = useState({
    title: "",
    id: "",
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
        setAlbums(response.data.slice(0, 5));
      });
  }, []);

  const results = albums.map((album) => (
    <article key = {album.id}>
        <h2>{album.title}</h2>
        <p>{album.id}</p>
    </article>
  ))

  return (
    <div className={classes.Albums}>
        {results.length > 0 ? results : "Loading..."}
    </div>
  );
}
export default Albums;