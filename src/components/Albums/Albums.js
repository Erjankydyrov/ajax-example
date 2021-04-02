import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Albums.module.css";


const Albums = ({ setSelectedAlbum }) => {
  const [albums, setAlbums] = useState([ ]);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
        const albums = response.data.slice(0, 5);
        setAlbums(albums);
      });
  }, []);

  const result = albums.map((album) =>(
      <div key={album.id} onClick={() => setSelectedAlbum(album.id)}>
          <h2>{album.title}</h2>
      </div>
  ) )


  return (
    <div className={classes.Albums}>
      {result}
    </div>
  );
}
export default Albums;