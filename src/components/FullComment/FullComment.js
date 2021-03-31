import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./FullComment.module.css";

const FullComment = ({ id }) => {
    const[comment, setComment] = useState({
        name: "",
        body: "",
    })

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                const comment = response.data;
            setComment(comment)
        });
    }, [id]);
    
    return ( 
        <main className = {classes.FullComment}>
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>
        </main>
    );
}
 
export default FullComment;