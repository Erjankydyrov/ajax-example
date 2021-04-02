import { useState } from "react";
import classes from "./Author.module.css";

const Author = ({ userid }) => {

    return ( 
        <div className = {classes.Author}>
            {userid}
        </div>
    );
}

export default Author;