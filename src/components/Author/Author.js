import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import classes from "./Author.module.css";

const Author = ({ userid }) => {
    
    const [email, setEmail] = useState("Loading");

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then((response) => {
                const emails = response.data;
            setEmail(emails.email)
        });
    }, [userid]);

    return ( 
        <div className = {classes.Author}>
            {email}
        </div>
    );
}

export default Author;