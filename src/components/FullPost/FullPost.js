import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./FullPost.module.css";

const FullPost = ({ id }) => {

    const[post, setPost] = useState({
        title: "",
        body: "",
    })

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                const post = response.data;
            setPost(post)
        });
    }, [id]);
    
    return ( 
        <main className = {classes.FullPost}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    );
}
 
export default FullPost;