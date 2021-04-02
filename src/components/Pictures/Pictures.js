import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Pictures.module.css";

const Pictures = ({ albumId }) => {

    const [pictures, setPictures] = useState([ ]);


    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        const pictures = response.data.slice(0, 5);
        setPictures(pictures);
      });
    }, []);

    const result = pictures.map((picture) =>(
      <div key={picture.id}>
          <img src  = {picture.url} />
      </div>
    ))
    return ( 
        <div className = {classes.Pictures}>
            {result}
        </div>
    );
}
 
export default Pictures;